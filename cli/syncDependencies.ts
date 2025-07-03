import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

// Your internal dependencies from package.json
const requiredDeps = [
  'clsx',
  'embla-carousel',
  'embla-carousel-react',
  'framer-motion',
  'react-focus-lock',
  'react-remove-scroll',
  'tailwind-merge',
  '@radix-ui/react-popover',
  '@radix-ui/react-tooltip',
  'lucide-react'
]

const projectRoot = process.cwd()

function getPackageManager(): 'npm' | 'yarn' {
  return fs.existsSync(path.join(projectRoot, 'yarn.lock')) ? 'yarn' : 'npm'
}

function getUserDependencies(): string[] {
  const pkgPath = path.join(projectRoot, 'package.json')
  if (!fs.existsSync(pkgPath)) return []
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  return Object.keys({
    ...(pkg.dependencies || {}),
    ...(pkg.devDependencies || {})
  })
}

export function syncDependencies() {
  const userDeps = getUserDependencies()
  const missingDeps = requiredDeps.filter(dep => !userDeps.includes(dep))

  if (missingDeps.length === 0) {
    console.log('📦 All required dependencies are already installed.')
    return
  }

  const packageManager = getPackageManager()
  const installCmd =
    packageManager === 'yarn'
      ? `yarn add ${missingDeps.join(' ')}`
      : `npm install ${missingDeps.join(' ')}`

  console.log(`📦 Installing missing dependencies: ${missingDeps.join(', ')}`)
  execSync(installCmd, { stdio: 'inherit' })
}
