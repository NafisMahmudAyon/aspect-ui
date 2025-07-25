#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const process_1 = __importDefault(require("process"));
const readline_1 = __importDefault(require("readline"));
const simple_git_1 = __importDefault(require("simple-git"));
const undici_1 = require("undici");
const repoUrl = 'https://github.com/NafisMahmudAyon/aspect-ui-components-folders.git';
function isTypeScriptProject() {
    return fs_1.default.existsSync(path_1.default.resolve('tsconfig.json'));
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
function isUrl(str) {
    try {
        new URL(str);
        return true;
    }
    catch {
        return false;
    }
}
function parseComponentsArg(arg) {
    return arg
        .split(/[\s,]+/)
        .map(name => name.trim())
        .filter(Boolean);
}
function detectMainCssFile() {
    const nextPath = path_1.default.resolve('app/globals.css');
    const vitePath = path_1.default.resolve('src/index.css');
    if (fs_1.default.existsSync(nextPath))
        return nextPath;
    if (fs_1.default.existsSync(vitePath))
        return vitePath;
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
    const fallbackPath = path_1.default.resolve('src/index.css');
    fs_1.default.mkdirSync(path_1.default.dirname(fallbackPath), { recursive: true });
    fs_1.default.writeFileSync(fallbackPath, '/* Main CSS file created */\n');
    return fallbackPath;
}
async function copyComponentFromRepo(components, branchName, config) {
    const tmpDir = fs_1.default.mkdtempSync(path_1.default.join(os_1.default.tmpdir(), 'aspect-ui-'));
    const git = (0, simple_git_1.default)();
    console.log(`⬇️ Cloning ${branchName} branch from repo...`);
    await git.clone(repoUrl, tmpDir, ['--depth', '1', '--branch', branchName]);
    let allDependencies = [];
    for (const name of components) {
        const compConfig = config.components[name];
        if (!compConfig) {
            console.error(`❌ Component not found in config: ${name}`);
            continue;
        }
        const srcComponentPath = path_1.default.join(tmpDir, compConfig.path);
        if (!fs_1.default.existsSync(srcComponentPath)) {
            console.error(`❌ Component folder not found in repo: ${compConfig.path}`);
            continue;
        }
        const destComponentPath = path_1.default.resolve('components', 'aspect-ui', path_1.default.basename(srcComponentPath));
        if (fs_1.default.existsSync(destComponentPath)) {
            const answer = await promptUser(`⚠️ Component ${name} already exists. Override? (y/n): `);
            if (answer !== 'y') {
                console.log(`⏭️ Skipped: ${name}`);
                continue;
            }
        }
        fs_1.default.mkdirSync(path_1.default.dirname(destComponentPath), { recursive: true });
        fs_1.default.cpSync(srcComponentPath, destComponentPath, { recursive: true });
        console.log(`✅ Added: components/aspect-ui/${path_1.default.basename(srcComponentPath)}`);
        // If there is a CSS file inside component folder, append to main CSS
        const files = fs_1.default.readdirSync(destComponentPath);
        for (const file of files) {
            if (file.endsWith('.css')) {
                const cssContent = fs_1.default.readFileSync(path_1.default.join(destComponentPath, file), 'utf-8');
                const mainCssFile = ensureMainCssFile();
                const comment = `\n\n/* From: ${path_1.default.join('components/aspect-ui', path_1.default.basename(srcComponentPath), file)} */\n`;
                fs_1.default.appendFileSync(mainCssFile, comment + cssContent.trim());
                console.log(`🎨 Appended CSS to: ${path_1.default.relative(process_1.default.cwd(), mainCssFile)}`);
            }
        }
        if (compConfig.dependencies && compConfig.dependencies.length) {
            allDependencies.push(...compConfig.dependencies);
        }
    }
    fs_1.default.rmSync(tmpDir, { recursive: true, force: true });
    console.log('🧹 Cleaned up temporary files.');
    if (allDependencies.length) {
        const uniqueDeps = Array.from(new Set(allDependencies));
        console.log(`📦 Installing dependencies: ${uniqueDeps.join(', ')}`);
        (0, child_process_1.execSync)(`npm install ${uniqueDeps.join(' ')}`, { stdio: 'inherit' });
    }
}
const inputArg = process_1.default.argv.slice(2).join(' ');
if (!inputArg) {
    console.error('❌ Please provide a URL or component names.\nExample: npx -p aspect-ui add <url|components>');
    process_1.default.exit(1);
}
;
(async () => {
    try {
        if (isUrl(inputArg)) {
            const res = await (0, undici_1.fetch)(inputArg);
            if (!res.ok)
                throw new Error(`Failed to fetch: ${res.statusText}`);
            const json = (await res.json());
            if (!json.success) {
                console.error(`❌ Invalid response: ${json.error}`);
                process_1.default.exit(1);
            }
            const isTS = isTypeScriptProject();
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
                if (isCssFile) {
                    const mainCssFile = ensureMainCssFile();
                    const comment = `\n\n/* From: ${file.target} */\n`;
                    fs_1.default.appendFileSync(mainCssFile, comment + file.content.trim());
                    console.log(`🎨 Appended CSS to: ${path_1.default.relative(process_1.default.cwd(), mainCssFile)}`);
                    continue;
                }
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
        else {
            const components = parseComponentsArg(inputArg);
            if (!components.length) {
                console.error('❌ No valid component names provided.');
                process_1.default.exit(1);
            }
            const isTS = isTypeScriptProject();
            const branchName = isTS ? 'typescript' : 'javascript';
            const configFile = path_1.default.join(__dirname, 'aspect-ui.config.json');
            const config = JSON.parse(fs_1.default.readFileSync(configFile, 'utf-8'));
            await copyComponentFromRepo(components, branchName, config);
        }
    }
    catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error occurred';
        console.error('❌ Error:', message);
        process_1.default.exit(1);
    }
})();
