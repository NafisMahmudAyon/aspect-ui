#!/usr/bin/env node

import inquirer from 'inquirer'
import simpleGit from 'simple-git'
import path from 'path'
import fs from 'fs'

// Define the supported repo URLs
const REPOS: Record<'typescript' | 'javascript', string> = {
  typescript: 'https://github.com/NafisMahmudAyon/aspect-ui-with-next-app-ts',
  javascript: 'https://github.com/your-username/aspect-ui-next-js'
}

async function main() {
  console.log('🧩 Welcome to Aspect UI + Next.js app installer!')

  interface CliAnswers {
    directory: string
    language: 'TypeScript' | 'JavaScript'
  }

  const answers = await inquirer.prompt<CliAnswers>([
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

  const directory: string = answers.directory
  const language: 'typescript' | 'javascript' =
    answers.language === 'TypeScript' ? 'typescript' : 'javascript'

  const targetPath = path.resolve(process.cwd(), directory)
  const repoUrl = REPOS[language]

  if (fs.existsSync(targetPath)) {
    console.error(`❌ Directory "${directory}" already exists.`)
    process.exit(1)
  }

  const git = simpleGit()

  console.log(`⏳ Cloning ${language} repo into ${directory}...`)
  try {
    await git.clone(repoUrl, targetPath)
    console.log('✅ Project setup complete!')
    console.log(`➡️  cd ${directory}`)
    console.log('📦 Run `npm install` or `pnpm install` to get started.')
  } catch (err: any) {
    console.error(`❌ Failed to clone repo: ${err.message}`)
    process.exit(1)
  }
}

main()
