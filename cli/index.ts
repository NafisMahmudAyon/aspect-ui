#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import os from 'os'
import https from 'https'
import AdmZip from 'adm-zip'
import { syncDependencies } from './syncDependencies'

const projectRoot = process.cwd()

const isTS = fs.existsSync(path.join(projectRoot, 'tsconfig.json'))

const isVite =
  fs.existsSync(path.join(projectRoot, 'vite.config.js')) ||
  fs.existsSync(path.join(projectRoot, 'vite.config.ts'))

let targetComponentDir = path.join(projectRoot, 'components/aspect-ui')
let targetUtilsDir = path.join(projectRoot, 'components/utils')

if (isVite) {
  targetComponentDir = path.join(projectRoot, 'components/aspect-ui')
  targetUtilsDir = path.join(projectRoot, 'components/utils')
}

const branchName = isTS ? 'typescript' : 'javascript'
const zipUrl = `https://github.com/NafisMahmudAyon/aspect-ui-components-folders/archive/refs/heads/${branchName}.zip`
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'aspect-ui-'))

function downloadZip(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https
      .get(url, response => {
        response.pipe(file)
        file.on('finish', () => {
          file.close()
          resolve()
        })
      })
      .on('error', err => {
        fs.unlinkSync(dest)
        reject(err)
      })
  })
}

function copyRecursiveSync(src: string, dest: string) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true })

  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item)
    const destPath = path.join(dest, item)

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyRecursiveSync(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

async function main() {
  console.log(`📦 Downloading zip from GitHub (${branchName} branch)...`)

  const zipPath = path.join(tempDir, 'repo.zip')
  await downloadZip(zipUrl, zipPath)

  console.log('🧩 Unzipping...')
  const zip = new AdmZip(zipPath)
  zip.extractAllTo(tempDir, true)

  const extractedFolder = path.join(
    tempDir,
    `aspect-ui-components-folders-${branchName}`
  )
  const componentsSrc = path.join(extractedFolder, 'components/aspect-ui')
  const utilsSrc = path.join(extractedFolder, 'components/utils')

  console.log('⚙️  Copying Aspect UI files...')
  copyRecursiveSync(componentsSrc, targetComponentDir)
  copyRecursiveSync(utilsSrc, targetUtilsDir)

  fs.rmSync(tempDir, { recursive: true, force: true })

  console.log(`✅ Components added to:
- ${targetComponentDir}
- ${targetUtilsDir}`)

  syncDependencies()
}

main()
