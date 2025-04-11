"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncDependencies = syncDependencies;
var child_process_1 = require("child_process");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
// Your internal dependencies from package.json
var requiredDeps = [
    'clsx',
    'deepmerge',
    'embla-carousel',
    'embla-carousel-react',
    'framer-motion',
    'react-focus-lock',
    'react-remove-scroll',
    'react-syntax-highlighter',
    'rehype-slug',
    'remark-toc',
    'tailwind-merge',
    'uuid'
];
var projectRoot = process.cwd();
function getPackageManager() {
    return fs_1.default.existsSync(path_1.default.join(projectRoot, 'yarn.lock')) ? 'yarn' : 'npm';
}
function getUserDependencies() {
    var pkgPath = path_1.default.join(projectRoot, 'package.json');
    if (!fs_1.default.existsSync(pkgPath))
        return [];
    var pkg = JSON.parse(fs_1.default.readFileSync(pkgPath, 'utf-8'));
    return Object.keys(__assign(__assign({}, (pkg.dependencies || {})), (pkg.devDependencies || {})));
}
function syncDependencies() {
    var userDeps = getUserDependencies();
    var missingDeps = requiredDeps.filter(function (dep) { return !userDeps.includes(dep); });
    if (missingDeps.length === 0) {
        console.log('📦 All required dependencies are already installed.');
        return;
    }
    var packageManager = getPackageManager();
    var installCmd = packageManager === 'yarn'
        ? "yarn add ".concat(missingDeps.join(' '))
        : "npm install ".concat(missingDeps.join(' '));
    console.log("\uD83D\uDCE6 Installing missing dependencies: ".concat(missingDeps.join(', ')));
    (0, child_process_1.execSync)(installCmd, { stdio: 'inherit' });
}
