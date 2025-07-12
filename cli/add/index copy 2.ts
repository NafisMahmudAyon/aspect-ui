#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import process from 'process'
import readline from 'readline'
import { fetch } from 'undici'

type ComponentFile = {
  path: string
  content: string
  type: string
  target: string
}

type ComponentJSON = {
  name: string
  type: string
  dependencies: string[]
  files: ComponentFile[]
  author: string
  title: string
}

type SuccessResponse = {
  success: true
  data: {
    _id: string
    id: number
    url: string
    codeTsx: string
    codeJsx: string
    pro: boolean
    jsonTsx: string
    jsonJsx: string
  }
}

type ErrorResponse = {
  success: false
  error: string
}

type ApiResponse = SuccessResponse | ErrorResponse

type ComponentConfig = {
  name: string
  path: string
  dependencies: string[]
  utils: string[]
}

type UtilConfig = {
  name: string
  path: string
  dependencies: string[]
}

type ComponentsConfig = {
  components: Record<string, ComponentConfig>
  utils: UtilConfig[]
}

type AspectUIConfig = {
  components: string[]
  css: string
}

function isTypeScriptProject(): boolean {
  const tsconfigExists = fs.existsSync(path.resolve('tsconfig.json'))
  const hasTsFiles = fs
    .readdirSync(path.resolve('.'), { withFileTypes: true })
    .some(
      file =>
        file.isFile() &&
        (file.name.endsWith('.ts') || file.name.endsWith('.tsx'))
    )
  return tsconfigExists || hasTsFiles
}

function isNextJSProject(): boolean {
  const packageJsonPath = path.resolve('package.json')
  if (!fs.existsSync(packageJsonPath)) return false

  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    return packageJson.dependencies?.next || packageJson.devDependencies?.next
  } catch {
    return false
  }
}

function promptUser(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close()
      resolve(answer.trim().toLowerCase())
    })
  })
}

function generateUniqueFileName(filePath: string): string {
  const ext = path.extname(filePath)
  const base = path.basename(filePath, ext)
  const dir = path.dirname(filePath)

  let uniquePath = path.join(
    dir,
    `${base}-${Math.random().toString(36).slice(2, 8)}${ext}`
  )

  while (fs.existsSync(uniquePath)) {
    uniquePath = path.join(
      dir,
      `${base}-${Math.random().toString(36).slice(2, 8)}${ext}`
    )
  }

  return uniquePath
}

function detectMainCssFile(): string | null {
  const nextPath = path.resolve('app/globals.css')
  const vitePath = path.resolve('src/index.css')

  if (fs.existsSync(nextPath)) return nextPath
  if (fs.existsSync(vitePath)) return vitePath

  return null
}

function ensureMainCssFile(): string {
  let mainCss = detectMainCssFile()

  if (mainCss) return mainCss

  const nextAppDir = path.resolve('app')
  const viteSrcDir = path.resolve('src')

  if (fs.existsSync(nextAppDir)) {
    const newPath = path.join(nextAppDir, 'globals.css')
    fs.writeFileSync(newPath, '/* Main CSS file created */\n')
    return newPath
  } else if (fs.existsSync(viteSrcDir)) {
    const newPath = path.join(viteSrcDir, 'index.css')
    fs.writeFileSync(newPath, '/* Main CSS file created */\n')
    return newPath
  }

  const fallbackPath = path.resolve('src/index.css')
  fs.mkdirSync(path.dirname(fallbackPath), { recursive: true })
  fs.writeFileSync(fallbackPath, '/* Main CSS file created */\n')
  return fallbackPath
}

function getComponentsPath(): string {
  const isNext = isNextJSProject()
  return isNext
    ? path.resolve('components/aspect-ui')
    : path.resolve('src/components/aspect-ui')
}

function getUtilsPath(): string {
  const isNext = isNextJSProject()
  return isNext
    ? path.resolve('components/utils')
    : path.resolve('src/components/utils')
}

function isValidURL(string: string): boolean {
  try {
    new URL(string)
    return true
  } catch {
    return false
  }
}

async function fetchFromGitHub(
  filePath: string,
  branch: string
): Promise<string> {
  const baseUrl = `https://raw.githubusercontent.com/NafisMahmudAyon/aspect-ui-components-folders/${branch}`
  const url = `${baseUrl}/${filePath}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`)
  }

  return await response.text()
}

async function fetchDirectoryContents(
  dirPath: string,
  branch: string
): Promise<string[]> {
  const apiUrl = `https://api.github.com/repos/NafisMahmudAyon/aspect-ui-components-folders/contents/${dirPath}?ref=${branch}`

  const response = await fetch(apiUrl)
  if (!response.ok) {
    throw new Error(
      `Failed to fetch directory contents: ${response.statusText}`
    )
  }

  interface GitHubContentItem {
    name: string;
    // Add other properties if needed
    [key: string]: any;
  }

  const contents = await response.json() as GitHubContentItem[];
  return contents.map((item) => item.name);
}

async function getComponentsConfig(): Promise<ComponentsConfig> {
  const isTS = isTypeScriptProject()
  const branch = isTS ? 'typescript' : 'javascript'

  try {
    const configContent = await fetchFromGitHub(
      'components-config.json',
      branch
    )
    return JSON.parse(configContent) as ComponentsConfig
  } catch (error) {
    console.error('❌ Failed to fetch components configuration')
    throw error
  }
}

function loadAspectUIConfig(): AspectUIConfig {
  const configPath = path.resolve('aspect-ui.json')
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'))
  }
  return { components: [], css: 'aspect-ui' }
}

function saveAspectUIConfig(config: AspectUIConfig): void {
  const configPath = path.resolve('aspect-ui.json')
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
}

function updateIndexFile(componentNames: string[]): void {
  const isTS = isTypeScriptProject()
  const componentsPath = getComponentsPath()
  const indexPath = path.join(componentsPath, isTS ? 'index.ts' : 'index.js')

  fs.mkdirSync(componentsPath, { recursive: true })

  const exports = componentNames
    .map(name => `export * from './${name}';`)
    .join('\n')
  fs.writeFileSync(indexPath, exports + '\n')
}

function addCSSImport(): void {
  const mainCssFile = ensureMainCssFile()
  const cssContent = fs.readFileSync(mainCssFile, 'utf8')
  const importStatement = "@import './components/aspect-ui/aspect-ui.css';"

  if (!cssContent.includes(importStatement)) {
    fs.writeFileSync(mainCssFile, importStatement + '\n' + cssContent)
    console.log(
      `🎨 Added CSS import to: ${path.relative(process.cwd(), mainCssFile)}`
    )
  }
}

async function installComponentByName(componentNames: string[]): Promise<void> {
  const config = await getComponentsConfig()
  const isTS = isTypeScriptProject()
  const branch = isTS ? 'typescript' : 'javascript'
  const componentsPath = getComponentsPath()
  const utilsPath = getUtilsPath()
  const aspectUIConfig = loadAspectUIConfig()

  const allDependencies = new Set<string>()
  const requiredUtils = new Set<string>()
  const newComponents: string[] = []

  // Validate all components exist
  for (const componentName of componentNames) {
    const lowerName = componentName.toLowerCase()
    if (!config.components[lowerName]) {
      console.error(`❌ Component '${componentName}' not found in registry`)
      process.exit(1)
    }
  }

  // Install aspect-ui.css first
  try {
    const cssContent = await fetchFromGitHub(
      'components/aspect-ui/aspect-ui.css',
      branch
    )
    const cssPath = path.join(componentsPath, 'aspect-ui.css')
    fs.mkdirSync(path.dirname(cssPath), { recursive: true })
    fs.writeFileSync(cssPath, cssContent)
    console.log(`🎨 Created: ${path.relative(process.cwd(), cssPath)}`)
    addCSSImport()
  } catch (error) {
    console.error('❌ Failed to install aspect-ui.css')
    throw error
  }

  // Collect all dependencies and utils
  for (const componentName of componentNames) {
    const lowerName = componentName.toLowerCase()
    const componentConfig = config.components[lowerName]

    componentConfig.dependencies.forEach(dep => allDependencies.add(dep))
    componentConfig.utils.forEach(util => requiredUtils.add(util))

    if (!aspectUIConfig.components.includes(lowerName)) {
      newComponents.push(lowerName)
    }
  }

  // Install dependencies
  if (allDependencies.size > 0) {
    const deps = Array.from(allDependencies)
    console.log(`📦 Installing dependencies: ${deps.join(', ')}`)
    execSync(`npm install ${deps.join(' ')}`, { stdio: 'inherit' })
  }

  // Install required utils
  for (const utilName of requiredUtils) {
    const utilConfig = config.utils.find(u => u.name === utilName)
    if (!utilConfig) {
      console.error(`❌ Utility '${utilName}' not found`)
      continue
    }

    const utilPath = path.join(utilsPath, path.basename(utilConfig.path))

    if (!fs.existsSync(utilPath)) {
      try {
        const utilContent = await fetchFromGitHub(utilConfig.path, branch)
        fs.mkdirSync(path.dirname(utilPath), { recursive: true })
        fs.writeFileSync(utilPath, utilContent)
        console.log(
          `🔧 Created util: ${path.relative(process.cwd(), utilPath)}`
        )

        // Install util dependencies
        if (utilConfig.dependencies.length > 0) {
          console.log(
            `📦 Installing util dependencies: ${utilConfig.dependencies.join(', ')}`
          )
          execSync(`npm install ${utilConfig.dependencies.join(' ')}`, {
            stdio: 'inherit'
          })
        }
      } catch (error) {
        console.error(`❌ Failed to install utility '${utilName}'`)
      }
    }
  }

  // Install components
  for (const componentName of componentNames) {
    const lowerName = componentName.toLowerCase()
    const componentConfig = config.components[lowerName]
    const capitalizedName =
      componentName.charAt(0).toUpperCase() + componentName.slice(1)

    try {
      const componentDir = path.join(componentsPath, capitalizedName)
      fs.mkdirSync(componentDir, { recursive: true })

      // Get component files from GitHub
      const componentPath = `components/aspect-ui/${capitalizedName}`
      const files = await fetchDirectoryContents(componentPath, branch)

      for (const file of files) {
        const filePath = `${componentPath}/${file}`
        const fileContent = await fetchFromGitHub(filePath, branch)
        const targetPath = path.join(componentDir, file)

        fs.writeFileSync(targetPath, fileContent)
        console.log(`✅ Created: ${path.relative(process.cwd(), targetPath)}`)
      }
    } catch (error) {
      console.error(`❌ Failed to install component '${componentName}'`)
      throw error
    }
  }

  // Update index file
  const allComponents = [...aspectUIConfig.components, ...newComponents]
  updateIndexFile(
    allComponents.map(name => name.charAt(0).toUpperCase() + name.slice(1))
  )

  // Update aspect-ui.json
  aspectUIConfig.components = allComponents
  saveAspectUIConfig(aspectUIConfig)

  console.log(
    `🎉 Successfully installed components: ${componentNames.join(', ')}`
  )
}

async function installComponentByURL(url: string): Promise<void> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`)

  const json = (await res.json()) as ApiResponse

  if (!json.success) {
    console.error(`❌ Invalid response: ${json.error}`)
    process.exit(1)
  }

  const isTS = isTypeScriptProject()
  const projectType = isTS ? 'TypeScript' : 'JavaScript'

  console.log(`📁 Detected project type: ${projectType}`)

  const componentRaw = isTS ? json.data.jsonTsx : json.data.jsonJsx
  const component = JSON.parse(componentRaw) as ComponentJSON

  if (component.dependencies.length) {
    console.log(
      `📦 Installing dependencies: ${component.dependencies.join(', ')}`
    )
    execSync(`npm install ${component.dependencies.join(' ')}`, {
      stdio: 'inherit'
    })
  }

  for (const file of component.files) {
    let fullPath = path.resolve(file.target)
    const dir = path.dirname(fullPath)

    const isCssFile = fullPath.endsWith('.css')

    if (isCssFile) {
      const mainCssFile = ensureMainCssFile()
      const relativeName = path.relative(process.cwd(), file.target)
      const comment = `\n\n/* From: ${relativeName} */\n`
      fs.appendFileSync(mainCssFile, comment + file.content.trim())
      console.log(
        `🎨 Appended CSS to: ${path.relative(process.cwd(), mainCssFile)}`
      )
      continue
    }

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    if (fs.existsSync(fullPath)) {
      const answer = await promptUser(
        `⚠️ File ${file.target} already exists. Override? (y/n): `
      )

      if (answer !== 'y') {
        const newPath = generateUniqueFileName(fullPath)
        fullPath = newPath
        console.log(
          `🔄 Creating new file: ${path.relative(process.cwd(), newPath)}`
        )
      } else {
        console.log(`♻️ Overwriting: ${file.target}`)
      }
    }

    fs.writeFileSync(fullPath, file.content.trim())
    console.log(`✅ Created: ${path.relative(process.cwd(), fullPath)}`)
  }

  console.log(`🎉 Added: ${component.title}`)
  console.log(`👤 Author: ${component.author}`)
}

// Main execution
;(async () => {
  try {
    const args = process.argv.slice(2)

    if (args.length === 0) {
      console.error(
        '❌ Please provide a URL or component names.\nExample: npx -p aspect-ui@latest add <url>\nExample: npx -p aspect-ui@latest add accordion button'
      )
      process.exit(1)
    }

    const firstArg = args[0]

    if (isValidURL(firstArg)) {
      // URL-based installation
      await installComponentByURL(firstArg)
    } else {
      // Component name-based installation
      await installComponentByName(args)
    }
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : 'Unknown error occurred'
    console.error('❌ Error:', message)
    process.exit(1)
  }
})()
