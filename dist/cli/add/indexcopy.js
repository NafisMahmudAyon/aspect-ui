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
const undici_1 = require("undici");
// --- Helper to detect TS project ---
function isTypeScriptProject() {
    const tsconfigExists = fs_1.default.existsSync(path_1.default.resolve('tsconfig.json'));
    const hasTsFiles = fs_1.default
        .readdirSync(path_1.default.resolve('.'), { withFileTypes: true })
        .some(file => file.isFile() &&
        (file.name.endsWith('.ts') || file.name.endsWith('.tsx')));
    return tsconfigExists || hasTsFiles;
}
// --- CLI Entrypoint ---
const url = process_1.default.argv[2];
if (!url) {
    console.error('❌ Please provide a JSON URL.\nExample: npx -p aspect-ui add <url>');
    process_1.default.exit(1);
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
            const fullPath = path_1.default.resolve(file.target);
            const dir = path_1.default.dirname(fullPath);
            if (!fs_1.default.existsSync(dir)) {
                fs_1.default.mkdirSync(dir, { recursive: true });
            }
            fs_1.default.writeFileSync(fullPath, file.content.trim());
            console.log(`✅ Created: ${file.target}`);
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
