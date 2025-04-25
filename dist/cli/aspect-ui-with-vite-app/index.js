#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const chalk_1 = __importDefault(require("chalk"));
function printFinalInstructions(directory) {
    console.log(`\n${chalk_1.default.green('✅ Project setup complete!')}`);
    if (directory !== '.')
        console.log(`${chalk_1.default.cyan('📂 cd')} ${chalk_1.default.bold(directory)}`);
    console.log(`${chalk_1.default.cyan('📦 npm install')}`);
    console.log(`${chalk_1.default.cyan('🚀 npm run dev')}`);
}
async function main() {
    console.log(`${chalk_1.default.magentaBright('🚀 Welcome to Aspect UI with Vite.js App Generator!')}`);
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
        console.error(chalk_1.default.red('❌ Directory already exists.'));
        process.exit(1);
    }
    if (isCurrentDir) {
        const confirm = await inquirer_1.default.prompt([
            {
                type: 'confirm',
                name: 'proceed',
                message: chalk_1.default.yellow('⚠️  This will install files into the current directory. Continue?'),
                default: false
            }
        ]);
        if (!confirm.proceed) {
            console.log(chalk_1.default.red('❌ Installation cancelled.'));
            process.exit(0);
        }
    }
    const repo = language === 'TypeScript'
        ? 'https://github.com/NafisMahmudAyon/aspect-ui-with-vite-app-ts'
        : 'https://github.com/NafisMahmudAyon/aspect-ui-with-vite-app-js';
    console.log(`⬇️  Cloning ${chalk_1.default.blue(language)} repo into "${chalk_1.default.green(directory)}"...`);
    try {
        (0, child_process_1.execSync)(`git clone ${repo} "${targetDir}"`, { stdio: 'inherit' });
        console.log(chalk_1.default.green('✅ Repo cloned successfully.'));
        setTimeout(() => {
            try {
                fs_1.default.rmSync(path_1.default.join(targetDir, '.git'), {
                    recursive: true,
                    force: true
                });
                console.log(chalk_1.default.gray('🧹 Removed .git folder to detach from original repo.'));
                printFinalInstructions(directory);
            }
            catch (error) {
                console.warn(chalk_1.default.yellow('⚠️ Could not remove .git folder:'), chalk_1.default.gray(error.message));
                printFinalInstructions(directory);
            }
        }, 1000);
    }
    catch (error) {
        console.error(chalk_1.default.red('❌ Failed to clone repo:'), error);
        process.exit(1);
    }
}
main();
