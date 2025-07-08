const twCssForReact = {
  'src/index.css': `
  @import "aspect-ui/css";
@tailwind base;
@tailwind components;
@tailwind utilities;
  `
}
const twCssForNext = {
  'app/globals.css': `
  @import "aspect-ui/css";
@tailwind base;
@tailwind components;
@tailwind utilities;
  `
}

const importInReact = {
  'src/App.tsx': `
import { Button } from "aspect-ui";
  
const App = () => {
  return (
    <Button>Aspect UI</Button>
  )
}

export default App;
  `
}
const importInNext = {
  'app/page.tsx': `
  import { Button } from "aspect-ui";

const page = () => {
  return (
    <Button>Aspect UI</Button>
  )
}
    
export default page;
  `
}
const twNpmInstall = {
  'Install-Tailwind-CSS':
    'npm i autoprefixer postcss tailwindcss\nnpx tailwindcss init -p'
}
const aspectInstall = {
  npm: 'npm i aspect-ui',
  yarn: 'yarn add aspect-ui',
  pnpm: 'pnpm add aspect-ui'
}
const viteReact = {
  'Vite-React': `
npm create vite@latest my-project -- --template react
cd my-project
`
}
const nextJsInstall = {
  'Create-NextJS-Project': `npx create-next-app@latest`
}
const twConfigForReact = {
  'tailwind.config.js': `
import { AspectUITheme } from "aspect-ui/AspectUITheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
}

export default AspectUITheme(config);
`,
  'tailwind.config.ts': `
  import type { Config } from 'tailwindcss'
import { AspectUITheme } from "aspect-ui/AspectUITheme";

const config : Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
}

export default AspectUITheme(config);
  `
}
const twConfigForNextJS = {
  'tailwind.config.js': `
import { AspectUITheme } from "aspect-ui/AspectUITheme";

const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
};

export default AspectUITheme(config);
`,
  'tailwind.config.ts': `
  import type { Config } from 'tailwindcss'
import { AspectUITheme } from "aspect-ui/AspectUITheme";

const config : Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
};

export default AspectUITheme(config);
  `
}

/////////////////////////////////////////////////
const bashInstall = {
  npm: `npm i aspect-ui`,
  yarn: `yarn add aspect-ui`,
  pnpm: `pnpm add aspect-ui`
}
const bashCLIImport = {
  npm: `npx aspect-ui@latest init`,
  yarn: `yarn aspect-ui@latest init`,
  pnpm: `pnpm dlx aspect-ui@latest init`
}
const bashNextInstall = {
  npm: `npx -p aspect-ui@latest next-app`
}
const bashViteInstall = {
  npm: `npx -p aspect-ui@latest vite-app`
}
const usageAspectUI = {
  javascript: `import { Button } from '@components/aspect-ui';

export default function HomePage() {
  return <Button>Get Started</Button>;
}`
}

export {
  importInNext,
  importInReact,
  aspectInstall,
  nextJsInstall,
  twConfigForNextJS,
  twConfigForReact,
  twCssForNext,
  twCssForReact,
  twNpmInstall,
  viteReact,
  //////////////////
  bashInstall,
  bashCLIImport,
  bashNextInstall,
  bashViteInstall,
  usageAspectUI
}
