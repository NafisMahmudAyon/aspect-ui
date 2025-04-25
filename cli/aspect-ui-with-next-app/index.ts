#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs'
import inquirer from 'inquirer'
import path from 'path'

interface Answers {
  directory: string
  language: 'TypeScript' | 'JavaScript'
}

function printFinalInstructions(directory: string) {
  console.log('\n✅ Project setup complete!')
  if (directory !== '.') console.log(`📂 cd ${directory}`)
  console.log('📦 npm install')
  console.log('🚀 npm run dev')
}

async function main() {
  console.log('🚀 Welcome to Aspect UI with Next.js App Generator!')

  const answers = await inquirer.prompt<Answers>([
    {
      type: 'input',
      name: 'directory',
      message: '📁 Where do you want to install the project?',
      default: 'aspect-ui-app'
    },
    {
      type: 'list',
      name: 'language',
      message: '📦 Choose a language:',
      choices: ['TypeScript', 'JavaScript']
    }
  ])

  const { directory, language } = answers
  const isCurrentDir = directory === '.'
  const targetDir = path.resolve(process.cwd(), directory)

  if (!isCurrentDir && fs.existsSync(targetDir)) {
    console.error('❌ Directory already exists.')
    process.exit(1)
  }

  if (isCurrentDir) {
    const confirm = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'proceed',
        message:
          '⚠️  This will install files into the current directory. Continue?',
        default: false
      }
    ])

    if (!confirm.proceed) {
      console.log('❌ Installation cancelled.')
      process.exit(0)
    }
  }

  const repo =
    language === 'TypeScript'
      ? 'https://github.com/NafisMahmudAyon/aspect-ui-with-next-app-ts'
      : 'https://github.com/your-org/aspect-ui-with-next-app-js'

  console.log(`⬇️  Cloning ${language} repo into "${directory}"...`)

  try {
    execSync(`git clone ${repo} "${targetDir}"`, { stdio: 'inherit' })

    console.log('✅ Repo cloned successfully.')

    // Wait 1 second before removing .git
    setTimeout(() => {
      try {
        fs.rmSync(path.join(targetDir, '.git'), {
          recursive: true,
          force: true
        })
        console.log('🧹 Removed .git folder to detach from original repo.')
        printFinalInstructions(directory)
      } catch (error: any) {
        console.warn('⚠️ Could not remove .git folder:', error.message)
        printFinalInstructions(directory)
      }
    }, 1000)
  } catch (error) {
    console.error('❌ Failed to clone repo:', error)
    process.exit(1)
  }
}

main()
