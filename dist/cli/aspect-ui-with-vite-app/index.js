#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const inquirer_1 = __importDefault(require("inquirer"));
const path_1 = __importDefault(require("path"));
function printFinalInstructions(directory) {
    console.log('\n✅ Project setup complete!');
    if (directory !== '.')
        console.log(`📂 cd ${directory}`);
    console.log('📦 npm install');
    console.log('🚀 npm run dev');
}
async function main() {
    console.log('🚀 Welcome to Aspect UI with Next.js App Generator!');
    const answers = await inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'directory',
            message: '📁 Where do you want to install the project?',
            default: 'aspect-ui-app'
        },
        {
            type: 'list',
            name: 'language',
            message: '📦 Choose a language:',
            choices: ['TypeScript', 'JavaScript']
        }
    ]);
    const { directory, language } = answers;
    const isCurrentDir = directory === '.';
    const targetDir = path_1.default.resolve(process.cwd(), directory);
    if (!isCurrentDir && fs_1.default.existsSync(targetDir)) {
        console.error('❌ Directory already exists.');
        process.exit(1);
    }
    if (isCurrentDir) {
        const confirm = await inquirer_1.default.prompt([
            {
                type: 'confirm',
                name: 'proceed',
                message: '⚠️  This will install files into the current directory. Continue?',
                default: false
            }
        ]);
        if (!confirm.proceed) {
            console.log('❌ Installation cancelled.');
            process.exit(0);
        }
    }
    const repo = language === 'TypeScript'
        ? 'https://github.com/NafisMahmudAyon/aspect-ui-with-vite-app-ts'
        : 'https://github.com/your-org/aspect-ui-with-vite-app-js';
    console.log(`⬇️  Cloning ${language} repo into "${directory}"...`);
    try {
        (0, child_process_1.execSync)(`git clone ${repo} "${targetDir}"`, { stdio: 'inherit' });
        console.log('✅ Repo cloned successfully.');
        // Wait 1 second before removing .git
        setTimeout(() => {
            try {
                fs_1.default.rmSync(path_1.default.join(targetDir, '.git'), {
                    recursive: true,
                    force: true
                });
                console.log('🧹 Removed .git folder to detach from original repo.');
                printFinalInstructions(directory);
            }
            catch (error) {
                console.warn('⚠️ Could not remove .git folder:', error.message);
                printFinalInstructions(directory);
            }
        }, 1000);
    }
    catch (error) {
        console.error('❌ Failed to clone repo:', error);
        process.exit(1);
    }
}
main();
