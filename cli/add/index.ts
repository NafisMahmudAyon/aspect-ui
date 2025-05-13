#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import process from 'process'
import { fetch } from 'undici' // ✅ Modern & CommonJS-friendly

const url = process.argv[2]

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
    const json = (await res.json()) as ComponentJSON

    console.log(`📦 Installing dependencies: ${json.dependencies.join(', ')}`)
    execSync(`npm install ${json.dependencies.join(' ')}`, { stdio: 'inherit' })

    for (const file of json.files) {
      const fullPath = path.resolve(file.target)
      const dir = path.dirname(fullPath)

      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

      fs.writeFileSync(fullPath, file.content.trim())
      console.log(`✅ Created: ${file.target}`)
    }

    console.log(`🎉 Added: ${json.title}`)
    console.log(`👤 Author: ${json.author}`)
  } catch (err: any) {
    console.error('❌ Error:', err.message)
    process.exit(1)
  }
})()
