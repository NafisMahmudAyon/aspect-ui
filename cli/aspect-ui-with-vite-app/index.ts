#!/usr/bin/env node

import inquirer from 'inquirer'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import chalk from 'chalk'

interface Answers {
  directory: string
  language: 'TypeScript' | 'JavaScript'
}

function printFinalInstructions(directory: string) {
  console.log(`\n${chalk.green('✅ Project setup complete!')}`)
  if (directory !== '.')
    console.log(`${chalk.cyan('📂 cd')} ${chalk.bold(directory)}`)
  console.log(`${chalk.cyan('📦 npm install')}`)
  console.log(`${chalk.cyan('🚀 npm run dev')}`)
}

async function main() {
  console.log(
    `${chalk.magentaBright('🚀 Welcome to Aspect UI with Vite.js App Generator!')}`
  )

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
    console.error(chalk.red('❌ Directory already exists.'))
    process.exit(1)
  }

  if (isCurrentDir) {
    const confirm = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'proceed',
        message: chalk.yellow(
          '⚠️  This will install files into the current directory. Continue?'
        ),
        default: false
      }
    ])

    if (!confirm.proceed) {
      console.log(chalk.red('❌ Installation cancelled.'))
      process.exit(0)
    }
  }

  const repo =
    language === 'TypeScript'
      ? 'https://github.com/NafisMahmudAyon/aspect-ui-with-vite-app-ts'
      : 'https://github.com/NafisMahmudAyon/aspect-ui-with-vite-app-js'

  console.log(
    `⬇️  Cloning ${chalk.blue(language)} repo into "${chalk.green(directory)}"...`
  )

  try {
    execSync(`git clone ${repo} "${targetDir}"`, { stdio: 'inherit' })

    console.log(chalk.green('✅ Repo cloned successfully.'))

    setTimeout(() => {
      try {
        fs.rmSync(path.join(targetDir, '.git'), {
          recursive: true,
          force: true
        })
        console.log(
          chalk.gray('🧹 Removed .git folder to detach from original repo.')
        )
        printFinalInstructions(directory)
      } catch (error: any) {
        console.warn(
          chalk.yellow('⚠️ Could not remove .git folder:'),
          chalk.gray(error.message)
        )
        printFinalInstructions(directory)
      }
    }, 1000)
  } catch (error) {
    console.error(chalk.red('❌ Failed to clone repo:'), error)
    process.exit(1)
  }
}

main()
