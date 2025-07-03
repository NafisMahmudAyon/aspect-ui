#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import os from 'os'
import { execSync } from 'child_process'
import { syncDependencies } from './syncDependencies'

// Project root
const projectRoot = process.cwd()

// Check TypeScript
const isTS = fs.existsSync(path.join(projectRoot, 'tsconfig.json'))

// Detect Vite
const isVite =
  fs.existsSync(path.join(projectRoot, 'vite.config.js')) ||
  fs.existsSync(path.join(projectRoot, 'vite.config.ts'))

// Target folders
let targetComponentDir = path.join(projectRoot, 'components/aspect-ui')
let targetUtilsDir = path.join(projectRoot, 'components/utils')
// let targetCSSDir = path.join(projectRoot, 'components/aspect-ui')

if (isVite) {
  targetComponentDir = path.join(projectRoot, 'src/components/aspect-ui')
  targetUtilsDir = path.join(projectRoot, 'src/components/utils')
  // targetCSSDir = path.join(projectRoot, 'src/components/aspect-ui')
}

// GitHub repo and branch
const repoUrl =
  'https://github.com/NafisMahmudAyon/aspect-ui-components-folders.git'
const branchName = isTS ? 'typescript' : 'javascript'

// Temporary directory
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'aspect-ui-'))

// Clone the repo
console.log(`📥 Cloning ${branchName} branch from Aspect UI repo...`)
execSync(
  `git clone --branch ${branchName} --single-branch ${repoUrl} ${tempDir}`,
  {
    stdio: 'inherit'
  }
)

// Source directories from temp
const componentsSrc = path.join(tempDir, 'components/aspect-ui')
const utilsSrc = path.join(tempDir, 'components/utils')

// Copy logic
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
      fs.copyFileSync(srcPath, destPath)
    }
  })
}

// 🚀 Run
console.log('⚙️  Copying Aspect UI files...')
copyRecursiveSync(componentsSrc, targetComponentDir)
copyRecursiveSync(utilsSrc, targetUtilsDir)
// copyRecursiveSync(CSSSrc, targetCSSDir)

// Clean up temp dir (optional)
fs.rmSync(tempDir, { recursive: true, force: true })

console.log(
  `✅ Components added to:\n - Components: ${targetComponentDir}\n - Utils: ${targetUtilsDir}`
)

syncDependencies()
