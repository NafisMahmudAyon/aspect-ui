#!/usr/bin/env node

import chalk from 'chalk'
import { execSync } from 'child_process'
import { Command } from 'commander'
import fs from 'fs/promises'
import fetch from 'node-fetch'
import ora from 'ora'
import path from 'path'

class AspectUICliError extends Error {
  constructor(message) {
    super(message)
    this.name = 'AspectUICliError'
  }
}

class AspectUI {
  baseUrl = 'https://aspect-ui.nafisbd.com'
  registryListUrl = `${this.baseUrl}/api/registry/list`
  componentsDir = 'components'
  libDir = 'components/utils'
  configFile = 'aspect.config.json'

  async init() {
    const run = new Command()

    run.name('aspect-ui').version('1.0.0').description('Aspect UI CLI')

    run
      .command('init')
      .description('Initialize Aspect UI')
      .option('-u, --url <url>', 'Set custom registry URL', this.baseUrl)
      .option('-l, --language <language>', 'Project language')
      .action(async options => {
        await this.initProject(options)
      })

    run
      .command('add [components...]')
      .description('Add one or more UI components to your project')
      .option('-l, --language <language>', 'Project language')
      .option('-f, --force', 'Force overwrite existing files')
      .action((components, options) => {
        this.addComponent(components, options)
      })

    run
      .command('update <component>')
      .description('Update a specific component')
      .option(
        '-l, --language <language>',
        'Project language (typescript/javascript)'
      )
      .action(async (component, options) => {
        await this.updateComponent(component, options)
      })

    run
      .command('remove <component>')
      .description('Remove a specific component')
      .action(async component => {
        await this.removeComponent(component)
      })

    await run.parseAsync(process.argv)
  }

  async initProject(options) {
    const spinner = ora('Initializing Aspect UI...').start()

    try {
      const [configExists, componentsDirExists, libDirExists] =
        await Promise.all([
          this.fileExists(this.configFile),
          this.dirExists(this.componentsDir),
          this.fileExists(path.join(this.libDir, 'utils.ts'))
        ])

      if (configExists && componentsDirExists && libDirExists) {
        spinner.info(
          chalk.yellow('Aspect UI already initialized in this project.')
        )
        return
      }

      spinner.text = 'Initializing Aspect UI....'
      const language = await this.determineLanguage(options.language)

      await Promise.all([
        this.saveConfig({
          registryUrl: options.url || this.baseUrl,
          componentsDir: this.componentsDir,
          libDir: this.libDir,
          projectLanguage: language
        }),
        this.ensureLibUtils({ language }),
        this.installDependencies(),
        this.ensureDirectory(this.componentsDir)
      ])

      const allComponentNames = Object.keys(componentList)
      await this.addComponent(allComponentNames, {
        language,
        force: true
      })

      spinner.succeed('Aspect UI initialized successfully.')

      console.log(chalk.blue('\nRegistry URL:'), options.url || this.baseUrl)
      console.log(
        chalk.blue('\nDependencies installed:\n  - clsx\n  - tailwind-merge')
      )
      console.log(
        chalk.blue('\nDirectories created:\n  - lib/\n  - components/')
      )
      console.log(chalk.blue('\nReady to add components!'))
    } catch (error) {
      spinner.fail(chalk.red('Failed to initialize Aspect UI.'))
      this.handleError(error)
    }
  }

  async addComponent(components, options = {}) {
    const spinner = ora(`Adding components: ${components}...`).start()

    try {
      const language = await this.determineLanguage(options.language)
      const isTS = language === 'typescript'

      const configExists = await this.fileExists(this.configFile)
      if (!configExists) {
        spinner.text = 'Initializing Aspect UI....'
        await this.saveConfig({
          registryUrl: options.url || this.baseUrl,
          componentsDir: this.componentsDir,
          libDir: this.libDir,
          projectLanguage: language
        })
        spinner.stop()
      }

      const { resolvedComponents, resolvedUtils } =
        this.resolveDependencies(components)
      const depsToInstall = new Set()

      // Process utils and components in parallel
      await Promise.all([
        this.processUtils(resolvedUtils, isTS, depsToInstall),
        this.processComponents(resolvedComponents, isTS, depsToInstall)
      ])

      // Install all dependencies
      if (depsToInstall.size) {
        await this.installComponentDependencies(Array.from(depsToInstall))
      }

      spinner.succeed('Components added successfully.')
    } catch (error) {
      spinner.fail('Failed to add component(s).')
      this.handleError(error)
    }
  }

  async determineLanguage(userLanguage) {
    // If user provides a language, validate and use it
    if (userLanguage) {
      if (!['typescript', 'javascript'].includes(userLanguage)) {
        throw new AspectUICliError(
          "Invalid language. Must be 'typescript' or 'javascript'."
        )
      }
      return userLanguage
    }

    // Try to detect project language, fallback to typescript
    try {
      const isTS = await this.isTypescriptProject()
      return isTS ? 'typescript' : 'typescript' // fallback to typescript even if not detected
    } catch {
      return 'typescript' // fallback to typescript on any error
    }
  }

  resolveDependencies(components) {
    const resolvedComponents = new Set()
    const resolvedUtils = new Set()

    const resolveDependenciesRecursive = names => {
      for (const name of names) {
        if (componentList[name]) {
          if (resolvedComponents.has(name)) continue

          const comp = componentList[name]
          if (comp.components?.length)
            resolveDependenciesRecursive(comp.components)
          if (comp.utils?.length) resolveDependenciesRecursive(comp.utils)

          resolvedComponents.add(name)
        } else if (utils[name]) {
          if (resolvedUtils.has(name)) continue
          resolvedUtils.add(name)
        } else {
          throw new AspectUICliError(
            `❌ '${name}' not found in component list or utils.`
          )
        }
      }
    }

    resolveDependenciesRecursive(components)
    return { resolvedComponents, resolvedUtils }
  }

  async processUtils(resolvedUtils, isTS, depsToInstall) {
    const utilPromises = Array.from(resolvedUtils).map(async utilName => {
      const util = utils[utilName]
      const files = isTS ? util.files.typescript : util.files.javascript
      const targetDir = path.join('components', util.path)

      await this.ensureDirectory(targetDir)

      const filePromises = files.map(async file => {
        const fileUrl = `https://raw.githubusercontent.com/NafisMahmudAyon/aspect-ui-components-folders/${isTS ? 'typescript' : 'javascript'}/components/utils/${file}`
        const targetPath = path.join(targetDir, file)

        try {
          const res = await fetch(fileUrl)
          if (!res.ok) throw new Error()
          const content = await res.text()
          await fs.writeFile(targetPath, content)
          console.log(chalk.green(`✅ Added util: ${utilName}/${file}`))
        } catch {
          console.log(chalk.red(`❌ Failed to fetch file: ${fileUrl}`))
        }
      })

      await Promise.all(filePromises)
      util.dependencies?.forEach(dep => depsToInstall.add(dep))
    })

    await Promise.all(utilPromises)
  }

  async processComponents(resolvedComponents, isTS, depsToInstall) {
    const componentPromises = Array.from(resolvedComponents).map(
      async compName => {
        const comp = componentList[compName]
        const files = isTS ? comp.files.typescript : comp.files.javascript
        const compDir = path.join('components/aspect-ui', comp.path)

        await this.ensureDirectory(compDir)

        const filePromises = files.map(async file => {
          const fileUrl = `https://raw.githubusercontent.com/NafisMahmudAyon/aspect-ui-components-folders/${isTS ? 'typescript' : 'javascript'}/components/aspect-ui/${comp.path}/${file}`
          const filePath = path.join(compDir, file)

          try {
            const res = await fetch(fileUrl)
            if (!res.ok) throw new Error()
            const content = await res.text()
            await fs.writeFile(filePath, content)
            console.log(chalk.green(`✅ Added component: ${compName}/${file}`))
          } catch {
            console.log(chalk.red(`❌ Failed to fetch file: ${fileUrl}`))
          }
        })

        await Promise.all(filePromises)
        comp.dependencies?.forEach(dep => depsToInstall.add(dep))

        await this.updateRootIndexFile(
          comp.path,
          isTS ? 'typescript' : 'javascript'
        )
      }
    )

    await Promise.all(componentPromises)
  }

  async addDefaultUtils(options) {
    const spinner = ora(`Adding Utils...`).start()

    try {
      await this.ensureDirectory(this.componentsDir)

      const language =
        options.language ||
        ((await this.isTypescriptProject()) ? 'typescript' : 'javascript')
      const depsSet = new Set()

      const utilPromises = Object.entries(utils).map(
        async ([utilName, util]) => {
          const targetDir = path.join(this.componentsDir, util.path)
          const files = util.files[language]

          await this.ensureDirectory(targetDir)

          const filePromises = files.map(async file => {
            const filePath = path.join(targetDir, file)

            const alreadyExists = await this.fileExists(filePath)
            if (!alreadyExists) {
              const rawUrl = `https://raw.githubusercontent.com/NafisMahmudAyon/aspect-ui-components-folders/${language}/components/utils/${file}`
              const res = await fetch(rawUrl)
              if (!res.ok)
                throw new AspectUICliError(`Failed to fetch file: ${rawUrl}`)
              const content = await res.text()
              await this.ensureDirectory(path.dirname(filePath))
              await fs.writeFile(filePath, content)
            }
          })

          await Promise.all(filePromises)
          util.dependencies?.forEach(dep => depsSet.add(dep))
          console.log(chalk.green(`✓ Added util: ${utilName}`))
        }
      )

      await Promise.all(utilPromises)

      if (depsSet.size > 0) {
        await this.installComponentDependencies(Array.from(depsSet))
        spinner.succeed('Dependencies installed.')
      }
    } catch (error) {
      spinner.fail('Failed to add utils.')
      this.handleError(error)
    }
  }

  async updateComponent(componentName, options) {
    const spinner = ora(`Updating ${componentName}...`).start()

    try {
      await this.ensureLibUtils()

      const config = await this.loadConfig().catch(() => ({}))
      const language = await this.determineLanguage(
        options.language || config.projectLanguage
      )

      const component = componentList[componentName]
      if (!component) {
        spinner.fail(
          `Component '${componentName}' is not in the component list.`
        )
        return
      }

      const files = component.files[language]
      const filePromises = files.map(async file => {
        const rawUrl = `https://raw.githubusercontent.com/NafisMahmudAyon/aspect-ui-components-folders/${language}/components/aspect-ui/${component.path}/${file}`
        const res = await fetch(rawUrl)
        if (!res.ok) throw new Error(`Failed to fetch file: ${rawUrl}`)

        const content = await res.text()
        const filePath = path.join(
          this.componentsDir,
          'aspect-ui',
          component.path,
          file
        )
        await this.ensureDirectory(path.dirname(filePath))
        await fs.writeFile(filePath, content)
      })

      await Promise.all(filePromises)
      spinner.succeed(
        chalk.green(`Component '${component.name}' updated successfully.`)
      )
    } catch (error) {
      spinner.fail(chalk.red('Failed to update component.'))
      this.handleError(error)
    }
  }

  async removeComponent(componentName) {
    const spinner = ora(`Removing ${componentName}...`).start()

    try {
      const registryUrl = await this.getRegistryUrl()
      const component = await this.fetchComponent(componentName, registryUrl)

      const removePromises = component.files.map(file =>
        fs.unlink(path.join(this.componentsDir, file.path)).catch(() => {})
      )

      await Promise.all(removePromises)
      spinner.succeed(chalk.green(`${component.title} removed successfully.`))
    } catch (error) {
      spinner.fail(chalk.red(`Failed to remove ${componentName}.`))
      this.handleError(error)
    }
  }

  async fileExists(filePath) {
    try {
      await fs.access(filePath)
      return true
    } catch {
      return false
    }
  }

  async ensureLibUtils(options = {}) {
    const language = await this.determineLanguage(options.language)
    await this.addDefaultUtils({ language })
  }

  async ensureDirectory(dir) {
    try {
      await fs.access(dir)
    } catch {
      await fs.mkdir(dir, { recursive: true })
    }
  }

  async installDependencies() {
    try {
      await fs.access('package.json')
    } catch {
      throw new AspectUICliError(
        'Run inside a Node.js project (missing package.json).'
      )
    }
    execSync('npm install clsx tailwind-merge', { stdio: 'pipe' })
  }

  async getRegistryUrl(url) {
    if (url) return url
    try {
      const config = await this.loadConfig()
      return config.registryUrl
    } catch {
      return this.baseUrl
    }
  }

  async loadConfig() {
    const content = await fs.readFile(this.configFile, 'utf8')
    return JSON.parse(content)
  }

  async fetchComponent(name, registryUrl) {
    const url = `${registryUrl}/${name}.json`
    const res = await fetch(url)
    if (!res.ok) throw new AspectUICliError(`Component '${name}' not found.`)
    return await res.json()
  }

  async checkExistingFiles(files) {
    const existsPromises = files.map(async file => {
      const filePath = path.join(this.componentsDir, file.path)
      try {
        await fs.access(filePath)
        return file.path
      } catch {
        return null
      }
    })

    const results = await Promise.all(existsPromises)
    return results.filter(Boolean)
  }

  async createComponentFiles(component) {
    await this.ensureDirectory(this.componentsDir)

    const filePromises = component.files.map(async file => {
      const fullPath = path.join(this.componentsDir, file.path)
      await this.ensureDirectory(path.dirname(fullPath))
      await fs.writeFile(fullPath, file.content)
    })

    await Promise.all(filePromises)
  }

  async installComponentDependencies(deps) {
    if (!deps.length) return
    try {
      execSync(`npm install ${deps.join(' ')}`, { stdio: 'inherit' })
    } catch (err) {
      throw new AspectUICliError('Failed to install component dependencies.')
    }
  }

  async dirExists(dirPath) {
    try {
      const stat = await fs.stat(dirPath)
      return stat.isDirectory()
    } catch {
      return false
    }
  }

  async saveConfig(config) {
    await fs.writeFile(this.configFile, JSON.stringify(config, null, 2))
  }

  async isTypescriptProject() {
    const tsConfigPath = path.join(process.cwd(), 'tsconfig.json')
    try {
      await fs.access(tsConfigPath)
      return true
    } catch {
      return false
    }
  }

  async updateRootIndexFile(componentName, language) {
    const ext = language === 'javascript' ? 'js' : 'ts'
    const indexPath = path.join(this.componentsDir, 'aspect-ui', `index.${ext}`)
    const exportLine = `export * from './${componentName}';`

    let content = ''
    try {
      content = await fs.readFile(indexPath, 'utf8')
      if (content.includes(exportLine)) return
    } catch {
      await fs.writeFile(indexPath, exportLine + '\n')
      return
    }

    content += `\n${exportLine}`
    await fs.writeFile(indexPath, content)
  }

  handleError(error) {
    console.error(chalk.red(`❌ ${error.message || error}`))
    process.exit(1)
  }
}

const aspect = new AspectUI()
aspect.init()

const componentList = {
  accordion: {
    name: 'Accordion',
    path: 'Accordion',
    dependencies: ['framer-motion', 'lucide-react'],
    utils: ['cn'],
    files: {
      javascript: [
        'Accordion.jsx',
        'AccordionContent.jsx',
        'AccordionItem.jsx',
        'AccordionHeader.jsx',
        'AccordionContext.jsx',
        'index.js'
      ],
      typescript: [
        'Accordion.tsx',
        'AccordionContent.tsx',
        'AccordionItem.tsx',
        'AccordionHeader.tsx',
        'AccordionContext.tsx',
        'index.ts'
      ]
    }
  },
  alert: {
    name: 'Alert',
    path: 'Alert',
    dependencies: ['lucide-react'],
    utils: ['cn'],
    files: {
      javascript: ['Alert.jsx', 'index.js'],
      typescript: ['Alert.tsx', 'index.ts']
    }
  },
  avatar: {
    name: 'Avatar',
    path: 'Avatar',
    dependencies: ['lucide-react'],
    utils: ['cn'],
    files: {
      javascript: [
        'Avatar.jsx',
        'AvatarBadge.jsx',
        'AvatarGroup.jsx',
        'AvatarImage.jsx',
        'index.js'
      ],
      typescript: [
        'Avatar.tsx',
        'AvatarBadge.tsx',
        'AvatarGroup.tsx',
        'AvatarImage.tsx',
        'index.ts'
      ]
    }
  },
  'date-picker': {
    name: 'DatePicker',
    path: 'DatePicker',
    dependencies: ['lucide-react'],
    components: ['dropdown', 'popover'],
    utils: ['cn'],
    files: {
      javascript: ['DatePicker.jsx', 'index.js'],
      typescript: ['DatePicker.tsx', 'index.ts']
    }
  },
  dropdown: {
    name: 'Dropdown',
    path: 'Dropdown',
    dependencies: ['lucide-react'],
    utils: ['cn'],
    files: {
      javascript: [
        'Dropdown.jsx',
        'DropdownAction.jsx',
        'DropdownContent.jsx',
        'DropdownItem.jsx',
        'DropdownList.jsx',
        'DropdownContext.jsx',
        'index.js'
      ],
      typescript: [
        'Dropdown.tsx',
        'DropdownAction.tsx',
        'DropdownContent.tsx',
        'DropdownItem.tsx',
        'DropdownList.tsx',
        'DropdownContext.tsx',
        'index.ts'
      ]
    }
  },
  popover: {
    name: 'Popover',
    path: 'Popover',
    dependencies: ['lucide-react'],
    utils: ['cn'],
    files: {
      javascript: ['Popover.jsx', 'index.js'],
      typescript: ['Popover.tsx', 'index.ts']
    }
  },
  modal: {
    name: 'Modal',
    path: 'Modal',
    dependencies: ['framer-motion', 'react-focus-lock', 'react-remove-scroll'],
    utils: ['cn', 'portal'],
    files: {
      javascript: [
        'Modal.jsx',
        'ModalActions.jsx',
        'ModalContent.jsx',
        'ModalContext.jsx',
        'ModalOverlay.jsx',
        'ModalPortal.jsx',
        'index.js'
      ],
      typescript: [
        'Modal.tsx',
        'ModalActions.tsx',
        'ModalContent.tsx',
        'ModalContext.tsx',
        'ModalOverlay.tsx',
        'ModalPortal.tsx',
        'index.ts'
      ]
    }
  }
}

export const utils = {
  cn: {
    name: 'cn',
    path: 'utils',
    dependencies: ['clsx', 'tailwind-merge'],
    files: {
      javascript: ['cn.js'],
      typescript: ['cn.ts']
    }
  },
  portal: {
    name: 'Portal',
    path: 'utils',
    dependencies: ['react-dom'],
    files: {
      javascript: ['Portal.jsx'],
      typescript: ['Portal.tsx']
    }
  }
}
