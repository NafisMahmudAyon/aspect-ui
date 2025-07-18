#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const child_process_1 = require("child_process");
const syncDependencies_1 = require("./syncDependencies");
// Project root
const projectRoot = process.cwd();
// Check TypeScript
const isTS = fs_1.default.existsSync(path_1.default.join(projectRoot, 'tsconfig.json'));
// Detect Vite
const isVite = fs_1.default.existsSync(path_1.default.join(projectRoot, 'vite.config.js')) ||
    fs_1.default.existsSync(path_1.default.join(projectRoot, 'vite.config.ts'));
// Target folders
let targetComponentDir = path_1.default.join(projectRoot, 'components/aspect-ui');
let targetUtilsDir = path_1.default.join(projectRoot, 'components/utils');
// let targetCSSDir = path.join(projectRoot, 'components/aspect-ui')
if (isVite) {
    targetComponentDir = path_1.default.join(projectRoot, 'components/aspect-ui');
    targetUtilsDir = path_1.default.join(projectRoot, 'components/utils');
    // targetCSSDir = path.join(projectRoot, 'src/components/aspect-ui')
}
// GitHub repo and branch
const repoUrl = 'https://github.com/NafisMahmudAyon/aspect-ui-components-folders.git';
const branchName = isTS ? 'typescript' : 'javascript';
// Temporary directory
const tempDir = fs_1.default.mkdtempSync(path_1.default.join(os_1.default.tmpdir(), 'aspect-ui-'));
// Clone the repo
console.log(`📥 Cloning ${branchName} branch from Aspect UI repo...`);
(0, child_process_1.execSync)(`git clone --branch ${branchName} --single-branch ${repoUrl} ${tempDir}`, {
    stdio: 'inherit'
});
// Source directories from temp
const componentsSrc = path_1.default.join(tempDir, 'components/aspect-ui');
const utilsSrc = path_1.default.join(tempDir, 'components/utils');
// Copy logic
function copyRecursiveSync(src, dest) {
    if (!fs_1.default.existsSync(dest)) {
        fs_1.default.mkdirSync(dest, { recursive: true });
    }
    fs_1.default.readdirSync(src).forEach(item => {
        const srcPath = path_1.default.join(src, item);
        let destPath = path_1.default.join(dest, item);
        if (fs_1.default.lstatSync(srcPath).isDirectory()) {
            copyRecursiveSync(srcPath, destPath);
        }
        else {
            fs_1.default.copyFileSync(srcPath, destPath);
        }
    });
}
// 🚀 Run
console.log('⚙️  Copying Aspect UI files...');
copyRecursiveSync(componentsSrc, targetComponentDir);
copyRecursiveSync(utilsSrc, targetUtilsDir);
// copyRecursiveSync(CSSSrc, targetCSSDir)
// Clean up temp dir (optional)
fs_1.default.rmSync(tempDir, { recursive: true, force: true });
console.log(`✅ Components added to:\n - Components: ${targetComponentDir}\n - Utils: ${targetUtilsDir}`);
(0, syncDependencies_1.syncDependencies)();
