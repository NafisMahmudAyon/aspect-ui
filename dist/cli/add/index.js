#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const process_1 = __importDefault(require("process"));
const readline_1 = __importDefault(require("readline"));
const undici_1 = require("undici");
function isTypeScriptProject() {
    const tsconfigExists = fs_1.default.existsSync(path_1.default.resolve('tsconfig.json'));
    const hasTsFiles = fs_1.default
        .readdirSync(path_1.default.resolve('.'), { withFileTypes: true })
        .some(file => file.isFile() &&
        (file.name.endsWith('.ts') || file.name.endsWith('.tsx')));
    return tsconfigExists || hasTsFiles;
}
function promptUser(question) {
    const rl = readline_1.default.createInterface({
        input: process_1.default.stdin,
        output: process_1.default.stdout
    });
    return new Promise(resolve => {
        rl.question(question, answer => {
            rl.close();
            resolve(answer.trim().toLowerCase());
        });
    });
}
function generateUniqueFileName(filePath) {
    const ext = path_1.default.extname(filePath);
    const base = path_1.default.basename(filePath, ext);
    const dir = path_1.default.dirname(filePath);
    let uniquePath = path_1.default.join(dir, `${base}-${Math.random().toString(36).slice(2, 8)}${ext}`);
    while (fs_1.default.existsSync(uniquePath)) {
        uniquePath = path_1.default.join(dir, `${base}-${Math.random().toString(36).slice(2, 8)}${ext}`);
    }
    return uniquePath;
}
const url = process_1.default.argv[2];
if (!url) {
    console.error('❌ Please provide a JSON URL.\nExample: npx -p aspect-ui add <url>');
    process_1.default.exit(1);
}
function detectMainCssFile() {
    const nextPath = path_1.default.resolve('app/globals.css');
    const vitePath = path_1.default.resolve('src/index.css');
    if (fs_1.default.existsSync(nextPath))
        return nextPath;
    if (fs_1.default.existsSync(vitePath))
        return vitePath;
    // If neither exists, return null
    return null;
}
function ensureMainCssFile() {
    let mainCss = detectMainCssFile();
    if (mainCss)
        return mainCss;
    const nextAppDir = path_1.default.resolve('app');
    const viteSrcDir = path_1.default.resolve('src');
    if (fs_1.default.existsSync(nextAppDir)) {
        const newPath = path_1.default.join(nextAppDir, 'globals.css');
        fs_1.default.writeFileSync(newPath, '/* Main CSS file created */\n');
        return newPath;
    }
    else if (fs_1.default.existsSync(viteSrcDir)) {
        const newPath = path_1.default.join(viteSrcDir, 'index.css');
        fs_1.default.writeFileSync(newPath, '/* Main CSS file created */\n');
        return newPath;
    }
    // fallback if neither app/ nor src/ exists, create src/index.css
    const fallbackPath = path_1.default.resolve('src/index.css');
    fs_1.default.mkdirSync(path_1.default.dirname(fallbackPath), { recursive: true });
    fs_1.default.writeFileSync(fallbackPath, '/* Main CSS file created */\n');
    return fallbackPath;
}
;
(async () => {
    try {
        const res = await (0, undici_1.fetch)(url);
        if (!res.ok)
            throw new Error(`Failed to fetch: ${res.statusText}`);
        const json = (await res.json());
        if (!json.success) {
            console.error(`❌ Invalid response: ${json.error}`);
            process_1.default.exit(1);
        }
        const isTS = isTypeScriptProject();
        const projectType = isTS ? 'TypeScript' : 'JavaScript';
        console.log(`📁 Detected project type: ${projectType}`);
        const componentRaw = isTS ? json.data.jsonTsx : json.data.jsonJsx;
        const component = JSON.parse(componentRaw);
        if (component.dependencies.length) {
            console.log(`📦 Installing dependencies: ${component.dependencies.join(', ')}`);
            (0, child_process_1.execSync)(`npm install ${component.dependencies.join(' ')}`, {
                stdio: 'inherit'
            });
        }
        for (const file of component.files) {
            let fullPath = path_1.default.resolve(file.target);
            const dir = path_1.default.dirname(fullPath);
            const isCssFile = fullPath.endsWith('.css');
            // Handle CSS file differently
            if (isCssFile) {
                const mainCssFile = ensureMainCssFile();
                const relativeName = path_1.default.relative(process_1.default.cwd(), file.target);
                const comment = `\n\n/* From: ${relativeName} */\n`;
                fs_1.default.appendFileSync(mainCssFile, comment + file.content.trim());
                console.log(`🎨 Appended CSS to: ${path_1.default.relative(process_1.default.cwd(), mainCssFile)}`);
                continue;
            }
            // Non-CSS files
            if (!fs_1.default.existsSync(dir)) {
                fs_1.default.mkdirSync(dir, { recursive: true });
            }
            if (fs_1.default.existsSync(fullPath)) {
                const answer = await promptUser(`⚠️ File ${file.target} already exists. Override? (y/n): `);
                if (answer !== 'y') {
                    const newPath = generateUniqueFileName(fullPath);
                    fullPath = newPath;
                    console.log(`🔄 Creating new file: ${path_1.default.relative(process_1.default.cwd(), newPath)}`);
                }
                else {
                    console.log(`♻️ Overwriting: ${file.target}`);
                }
            }
            fs_1.default.writeFileSync(fullPath, file.content.trim());
            console.log(`✅ Created: ${path_1.default.relative(process_1.default.cwd(), fullPath)}`);
        }
        console.log(`🎉 Added: ${component.title}`);
        console.log(`👤 Author: ${component.author}`);
    }
    catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error occurred';
        console.error('❌ Error:', message);
        process_1.default.exit(1);
    }
})();
