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

const url = process.argv[2]

if (!url) {
  console.error(
    '❌ Please provide a JSON URL.\nExample: npx -p aspect-ui add <url>'
  )
  process.exit(1)
}

function detectMainCssFile(): string | null {
  const nextPath = path.resolve('app/globals.css')
  const vitePath = path.resolve('src/index.css')

  if (fs.existsSync(nextPath)) return nextPath
  if (fs.existsSync(vitePath)) return vitePath

  // If neither exists, return null
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

  // fallback if neither app/ nor src/ exists, create src/index.css
  const fallbackPath = path.resolve('src/index.css')
  fs.mkdirSync(path.dirname(fallbackPath), { recursive: true })
  fs.writeFileSync(fallbackPath, '/* Main CSS file created */\n')
  return fallbackPath
}


;(async () => {
  try {
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

      // Handle CSS file differently
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

      // Non-CSS files
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
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : 'Unknown error occurred'
    console.error('❌ Error:', message)
    process.exit(1)
  }
})()
