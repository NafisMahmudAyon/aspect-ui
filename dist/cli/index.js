#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var targetDir = path_1.default.resolve(process.cwd(), 'components');
var componentsSrc = path_1.default.join(__dirname, '../app/src/components');
function copyRecursiveSync(src, dest) {
    if (!fs_1.default.existsSync(dest)) {
        fs_1.default.mkdirSync(dest, { recursive: true });
    }
    fs_1.default.readdirSync(src).forEach(function (item) {
        var srcPath = path_1.default.join(src, item);
        var destPath = path_1.default.join(dest, item);
        if (fs_1.default.lstatSync(srcPath).isDirectory()) {
            copyRecursiveSync(srcPath, destPath);
        }
        else {
            fs_1.default.copyFileSync(srcPath, destPath);
        }
    });
}
console.log('⚙️  Initializing Aspect UI components...');
copyRecursiveSync(componentsSrc, targetDir);
console.log("\u2705 Components added to ".concat(targetDir));
