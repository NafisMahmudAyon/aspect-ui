#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const syncDependencies_1 = require("./syncDependencies");
// Detect project root
const projectRoot = process.cwd();
// 1. Check if project uses TypeScript
const isTS = fs_1.default.existsSync(path_1.default.join(projectRoot, 'tsconfig.json'));
// 2. Detect framework
// const isNextAppRouter = fs.existsSync(path.join(projectRoot, 'app'))
const isVite = fs_1.default.existsSync(path_1.default.join(projectRoot, 'vite.config.js')) ||
    fs_1.default.existsSync(path_1.default.join(projectRoot, 'vite.config.ts'));
// 3. Decide target directories based on framework
let targetComponentDir = path_1.default.join(projectRoot, 'components/aspect-ui');
let targetUtilsDir = path_1.default.join(projectRoot, 'components/utils');
let targetCSSDir = path_1.default.join(projectRoot, 'components/aspect-ui');
if (isVite) {
    targetComponentDir = path_1.default.join(projectRoot, 'src/components/aspect-ui');
    targetUtilsDir = path_1.default.join(projectRoot, 'src/components/utils');
    targetCSSDir = path_1.default.join(projectRoot, 'src/components/aspect-ui');
}
// 4. Component and utils source
const componentsSrc = path_1.default.join(__dirname, '../../app/src/components');
const utilsSrc = path_1.default.join(__dirname, '../../app/src/utils');
const CSSSrc = path_1.default.join(__dirname, '../../app/src/css');
// 5. Copy files recursively and adapt TSX to JSX if needed
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
            if (!isTS && destPath.endsWith('.tsx')) {
                // Convert .tsx → .jsx for JS projects
                destPath = destPath.replace(/\.tsx$/, '.jsx');
                let content = fs_1.default.readFileSync(srcPath, 'utf-8');
                content = content
                    .replace(/: [a-zA-Z<>\[\]\|]+/g, '') // crude way to remove TS annotations
                    .replace(/interface\s+\w+\s+{[^}]+}/g, '') // crude way to remove interfaces
                    .replace(/import\s+type\s+/g, 'import ');
                fs_1.default.writeFileSync(destPath, content, 'utf-8');
            }
            else {
                fs_1.default.copyFileSync(srcPath, destPath);
            }
        }
    });
}
// 🚀 Run the script
console.log('⚙️  Initializing Aspect UI components...');
copyRecursiveSync(componentsSrc, targetComponentDir);
copyRecursiveSync(utilsSrc, targetUtilsDir);
copyRecursiveSync(CSSSrc, targetCSSDir);
console.log(`✅ Components added to:\n - Components: ${targetComponentDir}\n - Utils: ${targetUtilsDir}\n - CSS: ${targetCSSDir}`);
(0, syncDependencies_1.syncDependencies)();
