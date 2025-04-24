#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const simple_git_1 = __importDefault(require("simple-git"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Define the supported repo URLs
const REPOS = {
    typescript: 'https://github.com/NafisMahmudAyon/aspect-ui-with-next-app-ts',
    javascript: 'https://github.com/your-username/aspect-ui-next-js'
};
async function main() {
    console.log('🧩 Welcome to Aspect UI + Next.js app installer!');
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
    const directory = answers.directory;
    const language = answers.language === 'TypeScript' ? 'typescript' : 'javascript';
    const targetPath = path_1.default.resolve(process.cwd(), directory);
    const repoUrl = REPOS[language];
    if (fs_1.default.existsSync(targetPath)) {
        console.error(`❌ Directory "${directory}" already exists.`);
        process.exit(1);
    }
    const git = (0, simple_git_1.default)();
    console.log(`⏳ Cloning ${language} repo into ${directory}...`);
    try {
        await git.clone(repoUrl, targetPath);
        console.log('✅ Project setup complete!');
        console.log(`➡️  cd ${directory}`);
        console.log('📦 Run `npm install` or `pnpm install` to get started.');
    }
    catch (err) {
        console.error(`❌ Failed to clone repo: ${err.message}`);
        process.exit(1);
    }
}
main();
