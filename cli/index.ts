#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { syncDependencies } from './syncDependencies'

// Detect project root
const projectRoot = process.cwd()

// 1. Check if project uses TypeScript
const isTS = fs.existsSync(path.join(projectRoot, 'tsconfig.json'))

// 2. Detect framework
// const isNextAppRouter = fs.existsSync(path.join(projectRoot, 'app'))
const isVite =
  fs.existsSync(path.join(projectRoot, 'vite.config.js')) ||
  fs.existsSync(path.join(projectRoot, 'vite.config.ts'))

// 3. Decide target directories based on framework
let targetComponentDir = path.join(projectRoot, 'components/aspect-ui')
let targetUtilsDir = path.join(projectRoot, 'components/utils')
let targetCSSDir = path.join(projectRoot, 'components/aspect-ui')

if (isVite) {
  targetComponentDir = path.join(projectRoot, 'src/components/aspect-ui')
  targetUtilsDir = path.join(projectRoot, 'src/components/utils')
  targetCSSDir = path.join(projectRoot, 'src/components/aspect-ui')
}

// 4. Component and utils source
const componentsSrc = path.join(__dirname, '../../app/src/components')
const utilsSrc = path.join(__dirname, '../../app/src/utils')
const CSSSrc = path.join(__dirname, '../../app/src/css')

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
copyRecursiveSync(componentsSrc, targetComponentDir)
copyRecursiveSync(utilsSrc, targetUtilsDir)
copyRecursiveSync(CSSSrc, targetCSSDir)
console.log(
  `✅ Components added to:\n - Components: ${targetComponentDir}\n - Utils: ${targetUtilsDir}\n - CSS: ${targetCSSDir}`
)

syncDependencies()
