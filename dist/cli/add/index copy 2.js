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
function isNextJSProject() {
    const packageJsonPath = path_1.default.resolve('package.json');
    if (!fs_1.default.existsSync(packageJsonPath))
        return false;
    try {
        const packageJson = JSON.parse(fs_1.default.readFileSync(packageJsonPath, 'utf8'));
        return packageJson.dependencies?.next || packageJson.devDependencies?.next;
    }
    catch {
        return false;
    }
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
function getComponentsPath() {
    const isNext = isNextJSProject();
    return isNext
        ? path_1.default.resolve('components/aspect-ui')
        : path_1.default.resolve('src/components/aspect-ui');
}
function getUtilsPath() {
    const isNext = isNextJSProject();
    return isNext
        ? path_1.default.resolve('components/utils')
        : path_1.default.resolve('src/components/utils');
}
function isValidURL(string) {
    try {
        new URL(string);
        return true;
    }
    catch {
        return false;
    }
}
async function fetchFromGitHub(filePath, branch) {
    const baseUrl = `https://raw.githubusercontent.com/NafisMahmudAyon/aspect-ui-components-folders/${branch}`;
    const url = `${baseUrl}/${filePath}`;
    const response = await (0, undici_1.fetch)(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
    }
    return await response.text();
}
async function fetchDirectoryContents(dirPath, branch) {
    const apiUrl = `https://api.github.com/repos/NafisMahmudAyon/aspect-ui-components-folders/contents/${dirPath}?ref=${branch}`;
    const response = await (0, undici_1.fetch)(apiUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch directory contents: ${response.statusText}`);
    }
    const contents = await response.json();
    return contents.map((item) => item.name);
}
async function getComponentsConfig() {
    const isTS = isTypeScriptProject();
    const branch = isTS ? 'typescript' : 'javascript';
    try {
        const configContent = await fetchFromGitHub('components-config.json', branch);
        return JSON.parse(configContent);
    }
    catch (error) {
        console.error('❌ Failed to fetch components configuration');
        throw error;
    }
}
function loadAspectUIConfig() {
    const configPath = path_1.default.resolve('aspect-ui.json');
    if (fs_1.default.existsSync(configPath)) {
        return JSON.parse(fs_1.default.readFileSync(configPath, 'utf8'));
    }
    return { components: [], css: 'aspect-ui' };
}
function saveAspectUIConfig(config) {
    const configPath = path_1.default.resolve('aspect-ui.json');
    fs_1.default.writeFileSync(configPath, JSON.stringify(config, null, 2));
}
function updateIndexFile(componentNames) {
    const isTS = isTypeScriptProject();
    const componentsPath = getComponentsPath();
    const indexPath = path_1.default.join(componentsPath, isTS ? 'index.ts' : 'index.js');
    fs_1.default.mkdirSync(componentsPath, { recursive: true });
    const exports = componentNames
        .map(name => `export * from './${name}';`)
        .join('\n');
    fs_1.default.writeFileSync(indexPath, exports + '\n');
}
function addCSSImport() {
    const mainCssFile = ensureMainCssFile();
    const cssContent = fs_1.default.readFileSync(mainCssFile, 'utf8');
    const importStatement = "@import './components/aspect-ui/aspect-ui.css';";
    if (!cssContent.includes(importStatement)) {
        fs_1.default.writeFileSync(mainCssFile, importStatement + '\n' + cssContent);
        console.log(`🎨 Added CSS import to: ${path_1.default.relative(process_1.default.cwd(), mainCssFile)}`);
    }
}
async function installComponentByName(componentNames) {
    const config = await getComponentsConfig();
    const isTS = isTypeScriptProject();
    const branch = isTS ? 'typescript' : 'javascript';
    const componentsPath = getComponentsPath();
    const utilsPath = getUtilsPath();
    const aspectUIConfig = loadAspectUIConfig();
    const allDependencies = new Set();
    const requiredUtils = new Set();
    const newComponents = [];
    // Validate all components exist
    for (const componentName of componentNames) {
        const lowerName = componentName.toLowerCase();
        if (!config.components[lowerName]) {
            console.error(`❌ Component '${componentName}' not found in registry`);
            process_1.default.exit(1);
        }
    }
    // Install aspect-ui.css first
    try {
        const cssContent = await fetchFromGitHub('components/aspect-ui/aspect-ui.css', branch);
        const cssPath = path_1.default.join(componentsPath, 'aspect-ui.css');
        fs_1.default.mkdirSync(path_1.default.dirname(cssPath), { recursive: true });
        fs_1.default.writeFileSync(cssPath, cssContent);
        console.log(`🎨 Created: ${path_1.default.relative(process_1.default.cwd(), cssPath)}`);
        addCSSImport();
    }
    catch (error) {
        console.error('❌ Failed to install aspect-ui.css');
        throw error;
    }
    // Collect all dependencies and utils
    for (const componentName of componentNames) {
        const lowerName = componentName.toLowerCase();
        const componentConfig = config.components[lowerName];
        componentConfig.dependencies.forEach(dep => allDependencies.add(dep));
        componentConfig.utils.forEach(util => requiredUtils.add(util));
        if (!aspectUIConfig.components.includes(lowerName)) {
            newComponents.push(lowerName);
        }
    }
    // Install dependencies
    if (allDependencies.size > 0) {
        const deps = Array.from(allDependencies);
        console.log(`📦 Installing dependencies: ${deps.join(', ')}`);
        (0, child_process_1.execSync)(`npm install ${deps.join(' ')}`, { stdio: 'inherit' });
    }
    // Install required utils
    for (const utilName of requiredUtils) {
        const utilConfig = config.utils.find(u => u.name === utilName);
        if (!utilConfig) {
            console.error(`❌ Utility '${utilName}' not found`);
            continue;
        }
        const utilPath = path_1.default.join(utilsPath, path_1.default.basename(utilConfig.path));
        if (!fs_1.default.existsSync(utilPath)) {
            try {
                const utilContent = await fetchFromGitHub(utilConfig.path, branch);
                fs_1.default.mkdirSync(path_1.default.dirname(utilPath), { recursive: true });
                fs_1.default.writeFileSync(utilPath, utilContent);
                console.log(`🔧 Created util: ${path_1.default.relative(process_1.default.cwd(), utilPath)}`);
                // Install util dependencies
                if (utilConfig.dependencies.length > 0) {
                    console.log(`📦 Installing util dependencies: ${utilConfig.dependencies.join(', ')}`);
                    (0, child_process_1.execSync)(`npm install ${utilConfig.dependencies.join(' ')}`, {
                        stdio: 'inherit'
                    });
                }
            }
            catch (error) {
                console.error(`❌ Failed to install utility '${utilName}'`);
            }
        }
    }
    // Install components
    for (const componentName of componentNames) {
        const lowerName = componentName.toLowerCase();
        const componentConfig = config.components[lowerName];
        const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
        try {
            const componentDir = path_1.default.join(componentsPath, capitalizedName);
            fs_1.default.mkdirSync(componentDir, { recursive: true });
            // Get component files from GitHub
            const componentPath = `components/aspect-ui/${capitalizedName}`;
            const files = await fetchDirectoryContents(componentPath, branch);
            for (const file of files) {
                const filePath = `${componentPath}/${file}`;
                const fileContent = await fetchFromGitHub(filePath, branch);
                const targetPath = path_1.default.join(componentDir, file);
                fs_1.default.writeFileSync(targetPath, fileContent);
                console.log(`✅ Created: ${path_1.default.relative(process_1.default.cwd(), targetPath)}`);
            }
        }
        catch (error) {
            console.error(`❌ Failed to install component '${componentName}'`);
            throw error;
        }
    }
    // Update index file
    const allComponents = [...aspectUIConfig.components, ...newComponents];
    updateIndexFile(allComponents.map(name => name.charAt(0).toUpperCase() + name.slice(1)));
    // Update aspect-ui.json
    aspectUIConfig.components = allComponents;
    saveAspectUIConfig(aspectUIConfig);
    console.log(`🎉 Successfully installed components: ${componentNames.join(', ')}`);
}
async function installComponentByURL(url) {
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
        if (isCssFile) {
            const mainCssFile = ensureMainCssFile();
            const relativeName = path_1.default.relative(process_1.default.cwd(), file.target);
            const comment = `\n\n/* From: ${relativeName} */\n`;
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
// Main execution
;
(async () => {
    try {
        const args = process_1.default.argv.slice(2);
        if (args.length === 0) {
            console.error('❌ Please provide a URL or component names.\nExample: npx -p aspect-ui@latest add <url>\nExample: npx -p aspect-ui@latest add accordion button');
            process_1.default.exit(1);
        }
        const firstArg = args[0];
        if (isValidURL(firstArg)) {
            // URL-based installation
            await installComponentByURL(firstArg);
        }
        else {
            // Component name-based installation
            await installComponentByName(args);
        }
    }
    catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error occurred';
        console.error('❌ Error:', message);
        process_1.default.exit(1);
    }
})();
