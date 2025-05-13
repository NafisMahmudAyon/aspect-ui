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
const undici_1 = require("undici"); // ✅ Modern & CommonJS-friendly
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
        console.log(`📦 Installing dependencies: ${json.dependencies.join(', ')}`);
        (0, child_process_1.execSync)(`npm install ${json.dependencies.join(' ')}`, { stdio: 'inherit' });
        for (const file of json.files) {
            const fullPath = path_1.default.resolve(file.target);
            const dir = path_1.default.dirname(fullPath);
            if (!fs_1.default.existsSync(dir))
                fs_1.default.mkdirSync(dir, { recursive: true });
            fs_1.default.writeFileSync(fullPath, file.content.trim());
            console.log(`✅ Created: ${file.target}`);
        }
        console.log(`🎉 Added: ${json.title}`);
        console.log(`👤 Author: ${json.author}`);
    }
    catch (err) {
        console.error('❌ Error:', err.message);
        process_1.default.exit(1);
    }
})();
