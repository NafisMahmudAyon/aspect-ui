#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

const targetDir = path.resolve(process.cwd(), 'components')
const componentsSrc = path.join(__dirname, '../components')

function copyRecursiveSync(src: string, dest: string): void {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  fs.readdirSync(src).forEach(item => {
    const srcPath = path.join(src, item)
    const destPath = path.join(dest, item)

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyRecursiveSync(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  })
}

console.log('⚙️  Initializing Aspect UI components...')
copyRecursiveSync(componentsSrc, targetDir)
console.log(`✅ Components added to ${targetDir}`)
