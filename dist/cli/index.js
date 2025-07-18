#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const https_1 = __importDefault(require("https"));
const adm_zip_1 = __importDefault(require("adm-zip"));
const syncDependencies_1 = require("./syncDependencies");
const projectRoot = process.cwd();
const isTS = fs_1.default.existsSync(path_1.default.join(projectRoot, 'tsconfig.json'));
const isVite = fs_1.default.existsSync(path_1.default.join(projectRoot, 'vite.config.js')) ||
    fs_1.default.existsSync(path_1.default.join(projectRoot, 'vite.config.ts'));
let targetComponentDir = path_1.default.join(projectRoot, 'components/aspect-ui');
let targetUtilsDir = path_1.default.join(projectRoot, 'components/utils');
if (isVite) {
    targetComponentDir = path_1.default.join(projectRoot, 'components/aspect-ui');
    targetUtilsDir = path_1.default.join(projectRoot, 'components/utils');
}
const branchName = isTS ? 'typescript' : 'javascript';
const zipUrl = `https://github.com/NafisMahmudAyon/aspect-ui-components-folders/archive/refs/heads/${branchName}.zip`;
const tempDir = fs_1.default.mkdtempSync(path_1.default.join(os_1.default.tmpdir(), 'aspect-ui-'));
function downloadZip(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs_1.default.createWriteStream(dest);
        https_1.default
            .get(url, response => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        })
            .on('error', err => {
            fs_1.default.unlinkSync(dest);
            reject(err);
        });
    });
}
function copyRecursiveSync(src, dest) {
    if (!fs_1.default.existsSync(dest))
        fs_1.default.mkdirSync(dest, { recursive: true });
    for (const item of fs_1.default.readdirSync(src)) {
        const srcPath = path_1.default.join(src, item);
        const destPath = path_1.default.join(dest, item);
        if (fs_1.default.lstatSync(srcPath).isDirectory()) {
            copyRecursiveSync(srcPath, destPath);
        }
        else {
            fs_1.default.copyFileSync(srcPath, destPath);
        }
    }
}
async function main() {
    console.log(`📦 Downloading zip from GitHub (${branchName} branch)...`);
    const zipPath = path_1.default.join(tempDir, 'repo.zip');
    await downloadZip(zipUrl, zipPath);
    console.log('🧩 Unzipping...');
    const zip = new adm_zip_1.default(zipPath);
    zip.extractAllTo(tempDir, true);
    const extractedFolder = path_1.default.join(tempDir, `aspect-ui-components-folders-${branchName}`);
    const componentsSrc = path_1.default.join(extractedFolder, 'components/aspect-ui');
    const utilsSrc = path_1.default.join(extractedFolder, 'components/utils');
    console.log('⚙️  Copying Aspect UI files...');
    copyRecursiveSync(componentsSrc, targetComponentDir);
    copyRecursiveSync(utilsSrc, targetUtilsDir);
    fs_1.default.rmSync(tempDir, { recursive: true, force: true });
    console.log(`✅ Components added to:
- ${targetComponentDir}
- ${targetUtilsDir}`);
    (0, syncDependencies_1.syncDependencies)();
}
main();
