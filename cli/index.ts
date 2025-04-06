#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const targetDir = path.resolve(process.cwd(), 'components')

// Components folder inside your package
const componentsSrc = path.join(__dirname, '../components')

// Copy components
const copyRecursiveSync = (src, dest) => {
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

console.log(`⚙️ Initializing Aspect UI components...`)
copyRecursiveSync(componentsSrc, targetDir)
console.log(`✅ Components added to ${targetDir}`)
