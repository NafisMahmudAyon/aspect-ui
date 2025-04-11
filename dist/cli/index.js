#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var syncDependencies_1 = require("./syncDependencies");
// Detect project root
var projectRoot = process.cwd();
// 1. Check if project uses TypeScript
var isTS = fs_1.default.existsSync(path_1.default.join(projectRoot, 'tsconfig.json'));
// 2. Detect framework
var isNextAppRouter = fs_1.default.existsSync(path_1.default.join(projectRoot, 'app'));
var isVite = fs_1.default.existsSync(path_1.default.join(projectRoot, 'vite.config.js')) ||
    fs_1.default.existsSync(path_1.default.join(projectRoot, 'vite.config.ts'));
// 3. Decide target directories based on framework
var targetComponentDir = path_1.default.join(projectRoot, 'components/aspect-ui');
var targetUtilsDir = path_1.default.join(projectRoot, 'utils/aspect-ui');
if (isVite) {
    targetComponentDir = path_1.default.join(projectRoot, 'src/components/aspect-ui');
    targetUtilsDir = path_1.default.join(projectRoot, 'src/utils/aspect-ui');
}
// 4. Component and utils source
var componentsSrc = path_1.default.join(__dirname, '../../app/src/components');
var utilsSrc = path_1.default.join(__dirname, '../../app/src/utils');
// 5. Copy files recursively and adapt TSX to JSX if needed
function copyRecursiveSync(src, dest) {
    if (!fs_1.default.existsSync(dest)) {
        fs_1.default.mkdirSync(dest, { recursive: true });
    }
    fs_1.default.readdirSync(src).forEach(function (item) {
        var srcPath = path_1.default.join(src, item);
        var destPath = path_1.default.join(dest, item);
        if (fs_1.default.lstatSync(srcPath).isDirectory()) {
            copyRecursiveSync(srcPath, destPath);
        }
        else {
            if (!isTS && destPath.endsWith('.tsx')) {
                // Convert .tsx → .jsx for JS projects
                destPath = destPath.replace(/\.tsx$/, '.jsx');
                var content = fs_1.default.readFileSync(srcPath, 'utf-8');
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
console.log("\u2705 Components added to:\n - Components: ".concat(targetComponentDir, "\n - Utils: ").concat(targetUtilsDir));
(0, syncDependencies_1.syncDependencies)();
