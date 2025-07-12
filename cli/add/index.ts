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
  'https://github.com/NafisMahmudAyon/aspect-ui-components-folders.git' // ← replace this

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
    .split(/\s+/)
    .map(name => name.trim())
    .filter(Boolean)
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

const inputArg = process.argv[2]
if (!inputArg) {
  console.error(
    '❌ Please provide a URL or component names.\nExample: npx -p aspect-ui add <url|components>'
  )
  process.exit(1)
}

;(async () => {
  try {
    if (isUrl(inputArg)) {
      // 🔥 URL logic
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
      // 💥 Component names logic
      const components = parseComponentsArg(inputArg)
      if (!components.length) {
        console.error('❌ No valid component names provided.')
        process.exit(1)
      }

      const isTS = isTypeScriptProject()
      const branchName = isTS ? 'typescript' : 'javascript'

      // Load config
      const configFile = path.join(__dirname, '../config/aspect-ui.config.json')
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
