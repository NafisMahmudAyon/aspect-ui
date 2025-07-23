#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const child_process_1 = require("child_process");
const commander_1 = require("commander");
const promises_1 = __importDefault(require("fs/promises"));
const ora_1 = __importDefault(require("ora"));
const path_1 = __importDefault(require("path"));
class AspectUICliError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AspectUICliError';
    }
}
class AspectUI {
    constructor() {
        this.baseUrl = 'https://aspect-ui.nafisbd.com';
        this.registryListUrl = `${this.baseUrl}/api/registry/list`;
        this.componentsDir = 'components';
        this.libDir = 'components/utils';
        this.configFile = 'aspect.config.json';
    }
    async init() {
        const run = new commander_1.Command();
        run.name('aspect-ui').description('CLI for Aspect UI').version('1.0.0');
        run
            .command('init')
            .description('Initialize Aspect UI in the current directory')
            .option('-l, --language <language>', 'Project Language')
            .action(async (options) => {
            await this.initializeAspectUI(options);
        });
        run
            .command('add [components...]')
            .description('Add one or more UI components to the current project')
            .option('-l, --language <language>', 'Project Language')
            .action((components, options) => {
            if (components.length != 0) {
                this.addComponents(components, options);
            }
        });
        run
            .command('update <component>')
            .description('Update a specific component')
            .option('-l, --language <language>', 'Project Language')
            .action(async (component, options) => {
            await this.updateComponent(component, options);
        });
        run
            .command('delete [components...]')
            .description('Delete one or more UI components from the current project')
            .action(async (components) => {
            await this.deleteComponents(components);
        });
        await run.parseAsync(process.argv);
    }
    async deleteComponents(components) {
        const spinner = (0, ora_1.default)('Deleting components...').start();
        try {
            if (components.length === 0) {
                spinner.warn('No components specified for deletion.');
                return;
            }
            const componentsDir = path_1.default.join(process.cwd(), this.componentsDir, 'aspect-ui');
            if (!(await this.checkDirectory(componentsDir))) {
                spinner.warn('Components directory does not exist.');
                return;
            }
            for (const componentName of components) {
                const cp = componentList[componentName];
                if (!cp) {
                    spinner.warn(`Component ${componentName} not found.`);
                    continue;
                }
                const componentPath = path_1.default.join(componentsDir, cp.path);
                if (await this.checkDirectory(componentPath)) {
                    await promises_1.default.rm(componentPath, { recursive: true, force: true });
                    spinner.info(`Deleted component: ${componentName}`);
                    // remove from ./components/index.js this line export * from './${cp.path}';
                    const language = await this.determineLanguage();
                    const indexFile = path_1.default.join(componentsDir, `index.${language === 'javascript' ? 'js' : 'ts'}`);
                    if (await this.checkDirectory(indexFile)) {
                        const indexContent = await promises_1.default.readFile(indexFile, 'utf-8');
                        const updatedContent = indexContent
                            .split('\n')
                            .filter(line => !line.includes(`export * from './${cp.path}';`))
                            .join('\n');
                        await promises_1.default.writeFile(indexFile, updatedContent);
                        spinner.info(`Removed export line for ${componentName} from index file.`);
                    }
                }
                else {
                    spinner.warn(`Component ${componentName} not found.`);
                }
            }
            spinner.succeed('Components deleted successfully');
        }
        catch (error) {
            spinner.fail('Failed to delete components');
        }
    }
    async updateComponent(componentName, options) {
        const spinner = (0, ora_1.default)(`Updating component: ${componentName}`).start();
        try {
            const language = await this.determineLanguage(options.language);
            if (!['javascript', 'typescript'].includes(language)) {
                throw new AspectUICliError("Invalid language specified. Use 'javascript' or 'typescript'.");
            }
            const component = componentList[componentName];
            if (!component) {
                spinner.warn(`Component ${componentName} not found.`);
                return;
            }
            const componentsDir = path_1.default.join(process.cwd(), this.componentsDir);
            const componentPath = path_1.default.join(componentsDir, 'aspect-ui', component.path);
            if (!(await this.checkDirectory(componentPath))) {
                spinner.warn(`Component ${componentName} not found in the project.`);
                return;
            }
            for (const file of component.files[language]) {
                const filePath = path_1.default.join(componentPath, file);
                const rawUrl = `https://raw.githubusercontent.com/NafisMahmudAyon/aspect-ui-components-folders/${language}/components/aspect-ui/${component.path}/${file}`;
                const res = await fetch(rawUrl);
                if (!res.ok)
                    throw new AspectUICliError(`Failed to fetch file: ${rawUrl}`);
                const content = await res.text();
                // rewrite the file
                spinner.text = `Updating ${file}...`;
                await promises_1.default.writeFile(filePath, content);
                spinner.info(`Updated ${file}`);
            }
            spinner.succeed(`Component ${componentName} updated successfully`);
        }
        catch (error) {
            spinner.fail(`Failed to update component: ${componentName}`);
            throw new AspectUICliError(error.message || 'Component update error');
        }
    }
    async addComponents(components, options) {
        const spinner = (0, ora_1.default)('Adding components...').start();
        try {
            const language = await this.determineLanguage(options.language);
            if (!['javascript', 'typescript'].includes(language)) {
                throw new AspectUICliError("Invalid language specified. Use 'javascript' or 'typescript'.");
            }
            const depsSet = new Set();
            const componentsDir = path_1.default.join(process.cwd(), this.componentsDir);
            if (!(await this.checkDirectory(componentsDir))) {
                await promises_1.default.mkdir(componentsDir, { recursive: true });
            }
            const exportLines = [];
            // check components check all does have componentList[componentName].components
            // is there any component name then add then also join them with components
            const componentNameSet = new Set(components);
            for (const componentName of components) {
                const component = componentList[componentName];
                if (!component) {
                    spinner.warn(`Component ${componentName} not found.`);
                    continue;
                }
                if (component.components && component.components.length > 0) {
                    for (const subComponent of component.components) {
                        componentNameSet.add(subComponent);
                    }
                }
            }
            const componentNameList = Array.from(componentNameSet);
            for (const componentName of componentNameList) {
                const component = componentList[componentName];
                if (!component) {
                    spinner.warn(`Component ${componentName} not found.`);
                    continue;
                }
                const componentPath = path_1.default.join(componentsDir, 'aspect-ui', component.path);
                if (!(await this.checkDirectory(componentPath))) {
                    await promises_1.default.mkdir(componentPath, { recursive: true });
                }
                for (const file of component.files[language]) {
                    const filePath = path_1.default.join(componentPath, file);
                    if (!(await this.checkDirectory(filePath))) {
                        const rawUrl = `https://raw.githubusercontent.com/NafisMahmudAyon/aspect-ui-components-folders/${language}/components/aspect-ui/${component.path}/${file}`;
                        const res = await fetch(rawUrl);
                        if (!res.ok)
                            throw new AspectUICliError(`Failed to fetch file: ${rawUrl}`);
                        const content = await res.text();
                        await promises_1.default.writeFile(filePath, content);
                    }
                }
                if (component.dependencies && component.dependencies.length > 0) {
                    for (const dep of component.dependencies) {
                        if (!depsSet.has(dep)) {
                            depsSet.add(dep);
                            spinner.info(`Adding dependency: ${dep}`);
                        }
                    }
                }
                exportLines.push(`export * from './${component.path}';`);
            }
            const mainIndexFile = path_1.default.join(componentsDir, 'aspect-ui', `index.${language === 'javascript' ? 'js' : 'ts'}`);
            if (!(await this.checkDirectory(mainIndexFile))) {
                await promises_1.default.mkdir(path_1.default.dirname(mainIndexFile), { recursive: true });
            }
            const mainIndexContent = '\n' + exportLines.join('\n') + '\n';
            await promises_1.default.appendFile(mainIndexFile, mainIndexContent);
            await this.addDefaultUtils(language, depsSet);
            await this.addCSS();
            await this.installAllDependencies(depsSet);
            spinner.succeed('Components added successfully');
        }
        catch {
            spinner.fail('Failed to add components');
            throw new AspectUICliError(error.message || 'Components error');
        }
    }
    async initializeAspectUI(options) {
        const spinner = (0, ora_1.default)('Initializing Aspect UI...').start();
        const depsSet = new Set();
        try {
            const [configExists, componentsDirExists, libDirExists] = await Promise.all([
                this.checkConfigFile(),
                this.checkDirectory(this.componentsDir),
                this.checkDirectory(this.libDir)
            ]);
            if (configExists && componentsDirExists && libDirExists) {
                spinner.info(chalk_1.default.yellow('Aspect UI is already initialized.'));
                return;
            }
            spinner.text = 'Initializing Aspect UI...';
            const language = await this.determineLanguage(options.language);
            if (!['javascript', 'typescript'].includes(language)) {
                throw new AspectUICliError("Invalid language specified. Use 'javascript' or 'typescript'.");
            }
            await Promise.all([
                await this.saveConfig(language),
                await this.addDefaultUtils(language, depsSet),
                await this.addAllComponents(language, depsSet),
                await this.addCSS(),
                // install dependencies
                await this.installAllDependencies(depsSet)
            ]);
            spinner.succeed('Aspect UI initialized successfully');
        }
        catch (error) {
            spinner.fail('Failed to initialize Aspect UI');
            throw new AspectUICliError(error.message || 'Initialization error');
        }
    }
    async addCSS() {
        const spinner = (0, ora_1.default)('Adding CSS files...').start();
        try {
            const cssDir = path_1.default.join(process.cwd(), this.componentsDir, 'aspect-ui');
            if (!(await this.checkDirectory(cssDir))) {
                await promises_1.default.mkdir(cssDir, { recursive: true });
            }
            const cssFile = path_1.default.join(cssDir, 'aspect-ui.css');
            if (!(await this.checkDirectory(cssFile))) {
                const rawUrl = `https://raw.githubusercontent.com/NafisMahmudAyon/aspect-ui-components-folders/javascript/components/aspect-ui/aspect-ui.css`;
                const res = await fetch(rawUrl);
                if (!res.ok)
                    throw new AspectUICliError(`Failed to fetch CSS file: ${rawUrl}`);
                const content = await res.text();
                await promises_1.default.writeFile(cssFile, content);
            }
            spinner.succeed('CSS files added successfully');
            // check the project is nextjs or vite or not
            // const packageJsonPath = path.join(process.cwd(), "package.json");
            // try {
            // 	await fs.access(packageJsonPath);
            // 	const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));
            // 	if (packageJson.dependencies && packageJson.dependencies.next) {
            // 		spinner.info("Next.js project detected. Adding CSS import to _app.js");
            // 		const appJsPath = path.join(process.cwd(), "pages", "_app.js");
            // 		if (!(await this.checkDirectory(appJsPath))) {
            // 			await fs.writeFile(appJsPath, `import '../components/aspect-ui/aspect-ui.css';\n`);
            // 		} else {
            // 			const content = await fs.readFile(appJsPath, "utf-8");
            // 			if (!content.includes("aspect-ui.css")) {
            // 				await fs.appendFile(appJsPath, `import '../components/aspect-ui/aspect-ui.css';\n`);
            // 			}
            // 		}
            // 	}
            // 	if (packageJson.dependencies && packageJson.dependencies.vite) {
            // 		spinner.info("Vite project detected. Adding CSS import to main.js");
            // 		const mainJsPath = path.join(process.cwd(), "src", "main.js");
            // 		if (!(await this.checkDirectory(mainJsPath))) {
            // 			await fs.writeFile(mainJsPath, `import '../components/aspect-ui/aspect-ui.css';\n`);
            // 		} else {
            // 			const content = await fs.readFile(mainJsPath, "utf-8");
            // 			if (!content.includes("aspect-ui.css")) {
            // 				await fs.appendFile(mainJsPath, `import '../components/aspect-ui/aspect-ui.css';\n`);
            // 			}
            // 		}
            // 	}
            // } catch (error) {
            // 	spinner.warn("No package.json found or unable to read it. Skipping CSS import.");
            // }
        }
        catch (error) {
            spinner.fail('Failed to add CSS files');
            throw new AspectUICliError(error.message || 'CSS files error');
        }
    }
    async installAllDependencies(depsSet) {
        if (depsSet.size === 0) {
            console.log(chalk_1.default.yellow('No dependencies to install.'));
        }
        const spinner = (0, ora_1.default)('Installing dependencies...').start();
        try {
            (0, child_process_1.execSync)(`npm install ${[...depsSet].join(' ')}`, {
                stdio: 'inherit'
            });
            spinner.succeed('Dependencies installed successfully');
        }
        catch (error) {
            spinner.fail('Failed to install dependencies');
            throw new AspectUICliError(error.message || 'Dependency installation error');
        }
    }
    async addAllComponents(language, depsSet) {
        const spinner = (0, ora_1.default)('Adding all components...').start();
        try {
            const componentsDir = path_1.default.join(process.cwd(), this.componentsDir);
            if (!(await this.checkDirectory(componentsDir))) {
                await promises_1.default.mkdir(componentsDir, { recursive: true });
            }
            const exportLines = [];
            for (const [key, component] of Object.entries(componentList)) {
                const componentPath = path_1.default.join(componentsDir, 'aspect-ui', component.path);
                if (!(await this.checkDirectory(componentPath))) {
                    await promises_1.default.mkdir(componentPath, { recursive: true });
                }
                for (const file of component.files[language]) {
                    const filePath = path_1.default.join(componentPath, file);
                    if (!(await this.checkDirectory(filePath))) {
                        const rawUrl = `https://raw.githubusercontent.com/NafisMahmudAyon/aspect-ui-components-folders/${language}/components/aspect-ui/${component.path}/${file}`;
                        const res = await fetch(rawUrl);
                        if (!res.ok)
                            throw new AspectUICliError(`Failed to fetch file: ${rawUrl}`);
                        const content = await res.text();
                        await promises_1.default.writeFile(filePath, content);
                    }
                }
                if (component.dependencies && component.dependencies.length > 0) {
                    for (const dep of component.dependencies) {
                        if (!depsSet.has(dep)) {
                            depsSet.add(dep);
                            spinner.info(`Adding dependency: ${dep}`);
                            // install dep
                        }
                    }
                }
                // Collect export line for main index
                exportLines.push(`export * from './${component.path}';`);
            }
            // Write all exports to components/index.js or index.ts
            const mainIndexFile = path_1.default.join(componentsDir, 'aspect-ui', `index.${language === 'javascript' ? 'js' : 'ts'}`);
            const mainIndexContent = exportLines.join('\n') + '\n';
            await promises_1.default.writeFile(mainIndexFile, mainIndexContent);
            spinner.succeed('All components added successfully');
        }
        catch (error) {
            spinner.fail('Failed to add components');
            throw new AspectUICliError(error.message || 'Components error');
        }
    }
    async addDefaultUtils(language, depsSet) {
        const spinner = (0, ora_1.default)('Adding default utilities...').start();
        try {
            const utilsDir = path_1.default.join(process.cwd(), this.libDir);
            if (!(await this.checkDirectory(utilsDir))) {
                await Promise.all([await promises_1.default.mkdir(utilsDir, { recursive: true })]);
            }
            const utilsList = Object.values(utils);
            for (const util of utilsList) {
                // const utilsDir = path.join(utilsDir, util.path);
                if (!(await this.checkDirectory(utilsDir))) {
                    await promises_1.default.mkdir(utilsDir, { recursive: true });
                }
                for (const file of util.files[language]) {
                    const filePath = path_1.default.join(utilsDir, file);
                    if (!(await this.checkDirectory(filePath))) {
                        const rawUrl = `https://raw.githubusercontent.com/NafisMahmudAyon/aspect-ui-components-folders/${language}/components/utils/${file}`;
                        const res = await fetch(rawUrl);
                        if (!res.ok)
                            throw new AspectUICliError(`Failed to fetch file: ${rawUrl}`);
                        const content = await res.text();
                        await promises_1.default.writeFile(filePath, content);
                    }
                }
                if (util.dependencies && util.dependencies.length > 0) {
                    for (const dep of util.dependencies) {
                        if (!depsSet.has(dep)) {
                            depsSet.add(dep);
                            spinner.info(`Adding dependency: ${dep}`);
                            // Here you would typically run a package manager command to install the dependency
                            // For example, using npm:
                            // await exec(`npm install ${dep}`);
                        }
                    }
                }
            }
            spinner.succeed('Default utilities added successfully');
        }
        catch (error) {
            spinner.fail('Failed to add default utilities');
            throw new AspectUICliError(error.message || 'Utilities error');
        }
    }
    async saveConfig(language) {
        const config = {
            language,
            componentsDir: this.componentsDir,
            libDir: this.libDir
        };
        await promises_1.default.writeFile(this.configFile, JSON.stringify(config, null, 2));
    }
    async determineLanguage(language) {
        if (language) {
            if (language !== 'javascript' && language !== 'typescript') {
                throw new AspectUICliError("Invalid language specified. Use 'javascript' or 'typescript'.");
            }
            return language;
        }
        try {
            const isTS = await this.isTypescriptProject();
            return isTS ? 'typescript' : 'javascript';
        }
        catch {
            return 'javascript';
        }
    }
    async isTypescriptProject() {
        const tsConfigPath = path_1.default.join(process.cwd(), 'tsconfig.json');
        try {
            await promises_1.default.access(tsConfigPath);
            return true;
        }
        catch {
            return false;
        }
    }
    async checkConfigFile() {
        try {
            await promises_1.default.access(this.configFile);
            return true;
        }
        catch {
            return false;
        }
    }
    async checkDirectory(dir) {
        try {
            await promises_1.default.access(dir);
            return true;
        }
        catch {
            return false;
        }
    }
    handleError(error) {
        console.error(chalk_1.default.red(`❌ ${error.message || error}`));
        process.exit(1);
    }
}
const componentList = {
    accordion: {
        name: 'Accordion',
        path: 'Accordion',
        dependencies: ['framer-motion', 'lucide-react'],
        utils: ['cn'],
        files: {
            javascript: [
                'Accordion.jsx',
                'AccordionContent.jsx',
                'AccordionItem.jsx',
                'AccordionHeader.jsx',
                'AccordionContext.jsx',
                'index.js'
            ],
            typescript: [
                'Accordion.tsx',
                'AccordionContent.tsx',
                'AccordionItem.tsx',
                'AccordionHeader.tsx',
                'AccordionContext.tsx',
                'index.ts'
            ]
        }
    },
    alert: {
        name: 'Alert',
        path: 'Alert',
        dependencies: ['lucide-react'],
        utils: ['cn'],
        files: {
            javascript: ['Alert.jsx', 'index.js'],
            typescript: ['Alert.tsx', 'index.ts']
        }
    },
    avatar: {
        name: 'Avatar',
        path: 'Avatar',
        dependencies: ['lucide-react'],
        utils: ['cn'],
        files: {
            javascript: [
                'Avatar.jsx',
                'AvatarBadge.jsx',
                'AvatarGroup.jsx',
                'AvatarImage.jsx',
                'index.js'
            ],
            typescript: [
                'Avatar.tsx',
                'AvatarBadge.tsx',
                'AvatarGroup.tsx',
                'AvatarImage.tsx',
                'index.ts'
            ]
        }
    },
    'back-to-top': {
        name: 'BackToTop',
        path: 'BackToTop',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['BackToTop.jsx', 'index.js'],
            typescript: ['BackToTop.tsx', 'index.ts']
        }
    },
    badge: {
        name: 'Badge',
        path: 'Badge',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Badge.jsx', 'index.js'],
            typescript: ['Badge.tsx', 'index.ts']
        }
    },
    breadcrumb: {
        name: 'Breadcrumb',
        path: 'Breadcrumb',
        dependencies: ['lucide-react'],
        utils: ['cn'],
        files: {
            javascript: ['Breadcrumb.jsx', 'BreadcrumbItem.jsx', 'index.js'],
            typescript: ['Breadcrumb.tsx', 'BreadcrumbItem.tsx', 'index.ts']
        }
    },
    button: {
        name: 'Button',
        path: 'Button',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Button.jsx', 'index.js'],
            typescript: ['Button.tsx', 'index.ts']
        }
    },
    card: {
        name: 'Card',
        path: 'Card',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: [
                'Card.jsx',
                'CardContent.jsx',
                'CardFooter.jsx',
                'CardHeader.jsx',
                'CardTitle.jsx',
                'CardDescription.jsx',
                'index.js'
            ],
            typescript: [
                'Card.tsx',
                'CardContent.tsx',
                'CardFooter.tsx',
                'CardHeader.tsx',
                'CardTitle.tsx',
                'CardDescription.tsx',
                'index.ts'
            ]
        }
    },
    carousel: {
        name: 'Carousel',
        path: 'Carousel',
        dependencies: ['embla-carousel-react'],
        utils: ['cn'],
        files: {
            javascript: [
                'Carousel.jsx',
                'CarouselArrowButtons.jsx',
                'Control.jsx',
                'Indicators.jsx',
                'Item.jsx',
                'Slides.jsx',
                'CarouselContext.jsx',
                'CarouselDotButton.jsx',
                'Viewport.jsx',
                'index.js'
            ],
            typescript: [
                'Carousel.tsx',
                'CarouselArrowButtons.tsx',
                'Control.tsx',
                'Indicators.tsx',
                'Item.tsx',
                'Slides.tsx',
                'CarouselContext.tsx',
                'CarouselDotButton.tsx',
                'Viewport.tsx',
                'index.ts'
            ]
        }
    },
    checkbox: {
        name: 'Checkbox',
        path: 'Checkbox',
        dependencies: ['lucide-react'],
        utils: ['cn'],
        files: {
            javascript: ['Checkbox.jsx', 'index.js'],
            typescript: ['Checkbox.tsx', 'index.ts']
        }
    },
    'circular-progress-bar': {
        name: 'CircularProgressBar',
        path: 'CircularProgressBar',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['CircularProgressBar.jsx', 'index.js'],
            typescript: ['CircularProgressBar.tsx', 'index.ts']
        }
    },
    'date-picker': {
        name: 'DatePicker',
        path: 'DatePicker',
        dependencies: ['lucide-react'],
        components: ['dropdown', 'popover'],
        utils: ['cn'],
        files: {
            javascript: ['DatePicker.jsx', 'index.js'],
            typescript: ['DatePicker.tsx', 'index.ts']
        }
    },
    divider: {
        name: 'Divider',
        path: 'Divider',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Divider.jsx', 'index.js'],
            typescript: ['Divider.tsx', 'index.ts']
        }
    },
    dropdown: {
        name: 'Dropdown',
        path: 'Dropdown',
        dependencies: ['lucide-react'],
        utils: ['cn'],
        files: {
            javascript: [
                'Dropdown.jsx',
                'DropdownAction.jsx',
                'DropdownContent.jsx',
                'DropdownItem.jsx',
                'DropdownList.jsx',
                'DropdownContext.jsx',
                'index.js'
            ],
            typescript: [
                'Dropdown.tsx',
                'DropdownAction.tsx',
                'DropdownContent.tsx',
                'DropdownItem.tsx',
                'DropdownList.tsx',
                'DropdownContext.tsx',
                'index.ts'
            ]
        }
    },
    input: {
        name: 'Input',
        path: 'Input',
        dependencies: ['lucide-react'],
        components: ['tooltip'],
        utils: ['cn'],
        files: {
            javascript: ['Input.jsx', 'index.js'],
            typescript: ['Input.tsx', 'index.ts']
        }
    },
    masonry: {
        name: 'Masonry',
        path: 'Masonry',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Masonry.jsx', 'index.js'],
            typescript: ['Masonry.tsx', 'index.ts']
        }
    },
    modal: {
        name: 'Modal',
        path: 'Modal',
        dependencies: ['framer-motion', 'react-focus-lock', 'react-remove-scroll'],
        utils: ['cn', 'portal'],
        files: {
            javascript: [
                'Modal.jsx',
                'ModalActions.jsx',
                'ModalContent.jsx',
                'ModalContext.jsx',
                'ModalOverlay.jsx',
                'ModalPortal.jsx',
                'index.js'
            ],
            typescript: [
                'Modal.tsx',
                'ModalActions.tsx',
                'ModalContent.tsx',
                'ModalContext.tsx',
                'ModalOverlay.tsx',
                'ModalPortal.tsx',
                'index.ts'
            ]
        }
    },
    navbar: {
        name: 'Navbar',
        path: 'Navbar',
        dependencies: ['framer-motion'],
        utils: ['cn'],
        files: {
            javascript: [
                'Navbar.jsx',
                'NavbarContainer.jsx',
                'NavbarList.jsx',
                'NavbarItem.jsx',
                'NavbarCollapse.jsx',
                'NavbarCollapseBtn.jsx',
                'NavbarContext.jsx',
                'index.js'
            ],
            typescript: [
                'Navbar.tsx',
                'NavbarContainer.tsx',
                'NavbarList.tsx',
                'NavbarItem.tsx',
                'NavbarCollapse.tsx',
                'NavbarCollapseBtn.tsx',
                'NavbarContext.tsx',
                'index.ts'
            ]
        }
    },
    'number-counter': {
        name: 'NumberCounter',
        path: 'NumberCounter',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['NumberCounter.jsx', 'index.js'],
            typescript: ['NumberCounter.tsx', 'index.ts']
        }
    },
    pagination: {
        name: 'Pagination',
        path: 'Pagination',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Pagination.jsx', 'index.js'],
            typescript: ['Pagination.tsx', 'index.ts']
        }
    },
    popover: {
        name: 'Popover',
        path: 'Popover',
        dependencies: ['@radix-ui/react-popover'],
        utils: ['cn'],
        files: {
            javascript: ['Popover.jsx', 'index.js'],
            typescript: ['Popover.tsx', 'index.ts']
        }
    },
    progressbar: {
        name: 'ProgressBar',
        path: 'ProgressBar',
        dependencies: ['framer-motion'],
        utils: ['cn'],
        files: {
            javascript: ['ProgressBar.jsx', 'index.js'],
            typescript: ['ProgressBar.tsx', 'index.ts']
        }
    },
    radio: {
        name: 'Radio',
        path: 'Radio',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Radio.jsx', 'index.js'],
            typescript: ['Radio.tsx', 'index.ts']
        }
    },
    rating: {
        name: 'Rating',
        path: 'Rating',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Rating.jsx', 'index.js'],
            typescript: ['Rating.tsx', 'index.ts']
        }
    },
    sidebar: {
        name: 'Sidebar',
        path: 'Sidebar',
        dependencies: ['framer-motion', 'lucide-react'],
        utils: ['cn'],
        files: {
            javascript: [
                'Sidebar.jsx',
                'SidebarHeader.jsx',
                'SidebarItem.jsx',
                'SidebarContainer.jsx',
                'SidebarFooter.jsx',
                'SidebarContext.jsx',
                'SidebarToggleButton.jsx',
                'index.js'
            ],
            typescript: [
                'Sidebar.tsx',
                'SidebarHeader.tsx',
                'SidebarItem.tsx',
                'SidebarContainer.tsx',
                'SidebarFooter.tsx',
                'SidebarContext.tsx',
                'SidebarToggleButton.tsx',
                'index.ts'
            ]
        }
    },
    skeleton: {
        name: 'Skeleton',
        path: 'Skeleton',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Skeleton.jsx', 'index.js'],
            typescript: ['Skeleton.tsx', 'index.ts']
        }
    },
    slider: {
        name: 'Slider',
        path: 'Slider',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Slider.jsx', 'index.js'],
            typescript: ['Slider.tsx', 'index.ts']
        }
    },
    spinner: {
        name: 'Spinner',
        path: 'Spinner',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Spinner.jsx', 'index.js'],
            typescript: ['Spinner.tsx', 'index.ts']
        }
    },
    stepper: {
        name: 'Stepper',
        path: 'Stepper',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Stepper.jsx', 'index.js'],
            typescript: ['Stepper.tsx', 'index.ts']
        }
    },
    switch: {
        name: 'Switch',
        path: 'Switch',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Switch.jsx', 'index.js'],
            typescript: ['Switch.tsx', 'index.ts']
        }
    },
    table: {
        name: 'Table',
        path: 'Table',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: [
                'Table.jsx',
                'TableBody.jsx',
                'TableCaption.jsx',
                'TableFooter.jsx',
                'TableHeader.jsx',
                'TableHeadCell.jsx',
                'TableRow.jsx',
                'TableCell.jsx',
                'TableContext.jsx',
                'index.js'
            ],
            typescript: [
                'Table.tsx',
                'TableBody.tsx',
                'TableCaption.tsx',
                'TableFooter.tsx',
                'TableHeader.tsx',
                'TableHeadCell.tsx',
                'TableRow.tsx',
                'TableCell.tsx',
                'TableContext.tsx',
                'index.ts'
            ]
        }
    },
    tabs: {
        name: 'Tabs',
        path: 'Tabs',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: [
                'Tabs.jsx',
                'TabList.jsx',
                'TabItem.jsx',
                'TabContent.jsx',
                'TabsContext.jsx',
                'index.js'
            ],
            typescript: [
                'Tabs.tsx',
                'TabsList.tsx',
                'TabsItem.tsx',
                'TabsContent.tsx',
                'TabsContext.tsx',
                'index.ts'
            ]
        }
    },
    textarea: {
        name: 'Textarea',
        path: 'Textarea',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Textarea.jsx', 'index.js'],
            typescript: ['Textarea.tsx', 'index.ts']
        }
    },
    timeline: {
        name: 'Timeline',
        path: 'Timeline',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Timeline.jsx', 'TimelineItem.jsx', 'index.js'],
            typescript: ['Timeline.tsx', 'TimelineItem.tsx', 'index.ts']
        }
    },
    toast: {
        name: 'Toast',
        path: 'Toast',
        dependencies: ['framer-motion'],
        utils: ['cn'],
        files: {
            javascript: ['Toast.jsx', 'index.js'],
            typescript: ['Toast.tsx', 'index.ts']
        }
    },
    'toggle-button': {
        name: 'ToggleButton',
        path: 'ToggleButton',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: [
                'ToggleButton.jsx',
                'Toggle.jsx',
                'ToggleButtonGroup.jsx',
                'ToggleButtonGroupContext.jsx',
                'index.js'
            ],
            typescript: [
                'ToggleButton.tsx',
                'Toggle.tsx',
                'ToggleButtonGroup.tsx',
                'ToggleButtonGroupContext.tsx',
                'index.ts'
            ]
        }
    },
    tooltip: {
        name: 'Tooltip',
        path: 'Tooltip',
        dependencies: ['@radix-ui/react-tooltip'],
        utils: ['cn'],
        files: {
            javascript: ['Tooltip.jsx', 'index.js'],
            typescript: ['Tooltip.tsx', 'index.ts']
        }
    },
    typography: {
        name: 'Typography',
        path: 'Typography',
        dependencies: [],
        utils: ['cn'],
        files: {
            javascript: ['Typography.jsx', 'index.js'],
            typescript: ['Typography.tsx', 'index.ts']
        }
    },
    upload: {
        name: 'Upload',
        path: 'Upload',
        dependencies: ['lucide-react'],
        utils: ['cn'],
        files: {
            javascript: ['Upload.jsx', 'index.js'],
            typescript: ['Upload.tsx', 'index.ts']
        }
    }
};
const utils = {
    cn: {
        name: 'cn',
        path: 'utils',
        dependencies: ['clsx', 'tailwind-merge'],
        files: {
            javascript: ['cn.js'],
            typescript: ['cn.ts']
        }
    },
    portal: {
        name: 'Portal',
        path: 'utils',
        dependencies: [],
        files: {
            javascript: ['Portal.jsx'],
            typescript: ['Portal.tsx']
        }
    }
};
const aspect = new AspectUI();
aspect.init();
