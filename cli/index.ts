#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { syncDependencies } from './syncDependencies'

// Detect project root
const projectRoot = process.cwd()

// 1. Check if project uses TypeScript
const isTS = fs.existsSync(path.join(projectRoot, 'tsconfig.json'))

// 2. Detect framework
const isNextAppRouter = fs.existsSync(path.join(projectRoot, 'app'))
const isVite =
  fs.existsSync(path.join(projectRoot, 'vite.config.js')) ||
  fs.existsSync(path.join(projectRoot, 'vite.config.ts'))

// 3. Decide target directory based on framework
let targetDir = path.join(projectRoot, 'components')
if (isVite) targetDir = path.join(projectRoot, 'src/components')
if (isNextAppRouter) targetDir = path.join(projectRoot, 'components') // stays in root

// 4. Component source (your library's components)
const componentsSrc = path.join(__dirname, '../../app/src/components')

// 5. Copy files recursively and adapt TSX to JSX if needed
function copyRecursiveSync(src: string, dest: string): void {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  fs.readdirSync(src).forEach(item => {
    const srcPath = path.join(src, item)
    let destPath = path.join(dest, item)

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyRecursiveSync(srcPath, destPath)
    } else {
      if (!isTS && destPath.endsWith('.tsx')) {
        // Convert .tsx → .jsx for JS projects
        destPath = destPath.replace(/\.tsx$/, '.jsx')
        let content = fs.readFileSync(srcPath, 'utf-8')
        content = content
          .replace(/: [a-zA-Z<>\[\]\|]+/g, '') // crude way to remove TS annotations
          .replace(/interface\s+\w+\s+{[^}]+}/g, '') // crude way to remove interfaces
          .replace(/import\s+type\s+/g, 'import ')
        fs.writeFileSync(destPath, content, 'utf-8')
      } else {
        fs.copyFileSync(srcPath, destPath)
      }
    }
  })
}

// 🚀 Run the script
console.log('⚙️  Initializing Aspect UI components...')
copyRecursiveSync(componentsSrc, targetDir)
console.log(`✅ Components added to ${targetDir}`)

syncDependencies()