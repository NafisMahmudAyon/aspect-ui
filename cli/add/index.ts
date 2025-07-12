#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs'
import os from 'os'
import path from 'path'
import process from 'process'
import readline from 'readline'
import simpleGit from 'simple-git'
import { fetch } from 'undici'

const repoUrl =
  'https://github.com/NafisMahmudAyon/aspect-ui-components-folders.git'

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

function isTypeScriptProject(): boolean {
  return fs.existsSync(path.resolve('tsconfig.json'))
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

function isUrl(str: string): boolean {
  try {
    new URL(str)
    return true
  } catch {
    return false
  }
}

function parseComponentsArg(arg: string): string[] {
  return arg
    .split(/[\s,]+/)
    .map(name => name.trim())
    .filter(Boolean)
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

async function copyComponentFromRepo(
  components: string[],
  branchName: string,
  config: any
) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'aspect-ui-'))
  const git = simpleGit()

  console.log(`⬇️ Cloning ${branchName} branch from repo...`)
  await git.clone(repoUrl, tmpDir, ['--depth', '1', '--branch', branchName])

  let allDependencies: string[] = []

  for (const name of components) {
    const compConfig = config.components[name]
    if (!compConfig) {
      console.error(`❌ Component not found in config: ${name}`)
      continue
    }

    const srcComponentPath = path.join(tmpDir, compConfig.path)
    if (!fs.existsSync(srcComponentPath)) {
      console.error(`❌ Component folder not found in repo: ${compConfig.path}`)
      continue
    }

    const destComponentPath = path.resolve(
      'components',
      'aspect-ui',
      path.basename(srcComponentPath)
    )

    if (fs.existsSync(destComponentPath)) {
      const answer = await promptUser(
        `⚠️ Component ${name} already exists. Override? (y/n): `
      )
      if (answer !== 'y') {
        console.log(`⏭️ Skipped: ${name}`)
        continue
      }
    }

    fs.mkdirSync(path.dirname(destComponentPath), { recursive: true })
    fs.cpSync(srcComponentPath, destComponentPath, { recursive: true })
    console.log(
      `✅ Added: components/aspect-ui/${path.basename(srcComponentPath)}`
    )

    // If there is a CSS file inside component folder, append to main CSS
    const files = fs.readdirSync(destComponentPath)
    for (const file of files) {
      if (file.endsWith('.css')) {
        const cssContent = fs.readFileSync(
          path.join(destComponentPath, file),
          'utf-8'
        )
        const mainCssFile = ensureMainCssFile()
        const comment = `\n\n/* From: ${path.join('components/aspect-ui', path.basename(srcComponentPath), file)} */\n`
        fs.appendFileSync(mainCssFile, comment + cssContent.trim())
        console.log(
          `🎨 Appended CSS to: ${path.relative(process.cwd(), mainCssFile)}`
        )
      }
    }

    if (compConfig.dependencies && compConfig.dependencies.length) {
      allDependencies.push(...compConfig.dependencies)
    }
  }

  fs.rmSync(tmpDir, { recursive: true, force: true })
  console.log('🧹 Cleaned up temporary files.')

  if (allDependencies.length) {
    const uniqueDeps = Array.from(new Set(allDependencies))
    console.log(`📦 Installing dependencies: ${uniqueDeps.join(', ')}`)
    execSync(`npm install ${uniqueDeps.join(' ')}`, { stdio: 'inherit' })
  }
}

const inputArg = process.argv.slice(2).join(' ')
if (!inputArg) {
  console.error(
    '❌ Please provide a URL or component names.\nExample: npx -p aspect-ui add <url|components>'
  )
  process.exit(1)
}

;(async () => {
  try {
    if (isUrl(inputArg)) {
      const res = await fetch(inputArg)
      if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`)
      const json = (await res.json()) as ApiResponse

      if (!json.success) {
        console.error(`❌ Invalid response: ${json.error}`)
        process.exit(1)
      }

      const isTS = isTypeScriptProject()
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
          const comment = `\n\n/* From: ${file.target} */\n`
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
    } else {
      const components = parseComponentsArg(inputArg)
      if (!components.length) {
        console.error('❌ No valid component names provided.')
        process.exit(1)
      }

      const isTS = isTypeScriptProject()
      const branchName = isTS ? 'typescript' : 'javascript'

      const configFile = path.join(__dirname, 'aspect-ui.config.json')
      const config = JSON.parse(fs.readFileSync(configFile, 'utf-8'))

      await copyComponentFromRepo(components, branchName, config)
    }
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : 'Unknown error occurred'
    console.error('❌ Error:', message)
    process.exit(1)
  }
})()
