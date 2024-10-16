import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {}
  },
  presets: [require('./theme/default-preset')],
  plugins: []
}
export default config
