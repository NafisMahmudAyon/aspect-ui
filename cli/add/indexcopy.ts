#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import process from 'process'
import { fetch } from 'undici'

// --- Types ---
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

// --- Helper to detect TS project ---
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

// --- CLI Entrypoint ---
const url = process.argv[2]

if (!url) {
  console.error(
    '❌ Please provide a JSON URL.\nExample: npx -p aspect-ui add <url>'
  )
  process.exit(1)
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
      const fullPath = path.resolve(file.target)
      const dir = path.dirname(fullPath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      fs.writeFileSync(fullPath, file.content.trim())
      console.log(`✅ Created: ${file.target}`)
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
