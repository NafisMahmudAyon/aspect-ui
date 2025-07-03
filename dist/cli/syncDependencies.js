"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncDependencies = syncDependencies;
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
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
];
const projectRoot = process.cwd();
function getPackageManager() {
    return fs_1.default.existsSync(path_1.default.join(projectRoot, 'yarn.lock')) ? 'yarn' : 'npm';
}
function getUserDependencies() {
    const pkgPath = path_1.default.join(projectRoot, 'package.json');
    if (!fs_1.default.existsSync(pkgPath))
        return [];
    const pkg = JSON.parse(fs_1.default.readFileSync(pkgPath, 'utf-8'));
    return Object.keys({
        ...(pkg.dependencies || {}),
        ...(pkg.devDependencies || {})
    });
}
function syncDependencies() {
    const userDeps = getUserDependencies();
    const missingDeps = requiredDeps.filter(dep => !userDeps.includes(dep));
    if (missingDeps.length === 0) {
        console.log('📦 All required dependencies are already installed.');
        return;
    }
    const packageManager = getPackageManager();
    const installCmd = packageManager === 'yarn'
        ? `yarn add ${missingDeps.join(' ')}`
        : `npm install ${missingDeps.join(' ')}`;
    console.log(`📦 Installing missing dependencies: ${missingDeps.join(', ')}`);
    (0, child_process_1.execSync)(installCmd, { stdio: 'inherit' });
}
