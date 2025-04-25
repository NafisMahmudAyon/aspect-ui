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
const ora_1 = __importDefault(require("ora"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
function printFinalInstructions(directory) {
    console.log(`\n${chalk_1.default.green('✅ Project setup complete!')}`);
    if (directory !== '.')
        console.log(`${chalk_1.default.cyan('📂 cd')} ${chalk_1.default.bold(directory)}`);
    console.log(`${chalk_1.default.cyan('📦 npm install')}`);
    console.log(`${chalk_1.default.cyan('🚀 npm run dev')}`);
}
async function main() {
    const welcome = chalk_animation_1.default.rainbow('🚀 Welcome to Aspect UI with Next.js App Generator!');
    await new Promise(resolve => setTimeout(resolve, 2000));
    welcome.stop();
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
        ? 'https://github.com/NafisMahmudAyon/aspect-ui-with-next-app-ts'
        : 'https://github.com/NafisMahmudAyon/aspect-ui-with-next-app-js';
    const spinner = (0, ora_1.default)(`⬇️  Cloning ${chalk_1.default.blue(language)} repo into "${chalk_1.default.green(directory)}"...`).start();
    try {
        (0, child_process_1.execSync)(`git clone ${repo} "${targetDir}"`, { stdio: 'ignore' });
        spinner.succeed('✅ Repo cloned successfully.');
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
        spinner.fail(chalk_1.default.red('❌ Failed to clone repo.'));
        console.error(error);
        process.exit(1);
    }
}
main();
