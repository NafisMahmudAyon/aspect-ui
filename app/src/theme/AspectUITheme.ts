import merge from 'deepmerge'
import type { Config } from 'tailwindcss'

type ColorThemeType = {
  [key: string]: {
    [key: number]: string
  }
}

const colors: ColorThemeType = {
  primary: {
    '50': '#edf6f7',
    '100': '#cbe2e2',
    '200': '#a9cdcf',
    '300': '#87b8bc',
    '400': '#65a3a9',
    '500': '#438e96',
    '600': '#38757a',
    '700': '#2c5c60',
    '800': '#204346',
    '900': '#142a2c',
    '950': '#081112'
  },
  secondary: {
    50: '#f0f2f5',
    100: '#dadee6',
    200: '#c4cbd7',
    300: '#aeb8c8',
    400: '#98a5b9',
    500: '#8292aa',
    600: '#6a788b',
    700: '#525d6c',
    800: '#3a424d',
    900: '#22272e',
    950: '#0a0c0f'
  },
  error: {
    50: '#fde8e8',
    100: '#fbc8c8',
    200: '#f8a7a7',
    300: '#f58686',
    400: '#f26565',
    500: '#ef4444',
    600: '#c33636',
    700: '#982929',
    800: '#6d1c1c',
    900: '#420f0f',
    950: '#170202'
  },
  success: {
    50: '#e8fdf6',
    100: '#bcf1dd',
    200: '#91e3c6',
    300: '#66d5af',
    400: '#3bc798',
    500: '#10b981',
    600: '#0e976c',
    700: '#0b7755',
    800: '#08573e',
    900: '#053727',
    950: '#021710'
  },
  warning: {
    50: '#fef8e6',
    100: '#faebb8',
    200: '#f6dd8c',
    300: '#f2cf60',
    400: '#eec134',
    500: '#eab308',
    600: '#c19305',
    700: '#977304',
    800: '#6d5303',
    900: '#433302',
    950: '#191301'
  },
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554'
  }
}

const presetStyle = (color: ColorThemeType) => {
  return {
    theme: {
      extend: {
        colors: { ...color },
        fontSize: {
          display1: [
            '6rem',
            {
              lineHeight: '6.875rem',
              letterSpacing: '-2.5px',
              fontWeight: '700'
            }
          ],
          display2: [
            '5rem',
            {
              lineHeight: '5.75rem',
              letterSpacing: '-2.875px',
              fontWeight: '700'
            }
          ],
          h1: [
            '3rem',
            {
              lineHeight: '3.6rem',
              letterSpacing: '-1.5px',
              fontWeight: '700'
            }
          ],
          h2: [
            '2.5rem',
            {
              lineHeight: '3.25rem',
              letterSpacing: '-1.9px',
              fontWeight: '700'
            }
          ],
          h3: [
            '2rem',
            {
              lineHeight: '2.8rem',
              letterSpacing: '-1.5px',
              fontWeight: '600'
            }
          ],
          h4: [
            '1.75rem',
            {
              lineHeight: '2.625rem',
              letterSpacing: '-1.3px',
              fontWeight: '600'
            }
          ],
          h5: [
            '1.5rem',
            {
              lineHeight: '2.25rem',
              letterSpacing: '-1.1px',
              fontWeight: '500'
            }
          ],
          h6: [
            '1.25rem',
            {
              lineHeight: '1.875rem',
              letterSpacing: '-0.9px',
              fontWeight: '500'
            }
          ],
          body1: [
            '1rem',
            {
              lineHeight: '1.5rem',
              letterSpacing: '-0.7px',
              fontWeight: '400'
            }
          ],
          body2: [
            '0.875rem',
            {
              lineHeight: '1.25rem',
              letterSpacing: '-0.75px',
              fontWeight: '400'
            }
          ],
          caption: [
            '0.75rem',
            {
              lineHeight: '1.66rem',
              letterSpacing: '-0.5px',
              fontWeight: '400'
            }
          ],
          p: [
            '1rem',
            {
              lineHeight: '1.5rem',
              letterSpacing: '-0.7px',
              fontWeight: '400'
            }
          ]
        },
        boxShadow: {
          small: '0px 1px 2px rgba(45, 54, 67, 0.05)',
          default:
            '0px 2px 4px rgba(45, 54, 67, 0.08), 0px 1px 2px rgba(45, 54, 67, 0.04)',
          medium:
            '0px 4px 8px -2px rgba(45, 54, 67, 0.08), 0px 2px 4px -2px rgba(45, 54, 67, 0.06)',
          large:
            '0px 20px 24px -4px rgba(45, 54, 67, 0.04), 0px 8px 11px -4px rgba(45, 54, 67, 0.04)',
          xLarge: '0px 24px 50px -12px rgba(45, 54, 67, 0.12)',
          '2xLarge': '0px 32px 64px -12px rgba(45, 54, 67, 0.14)'
        },
        keyframes: {
          zoomIn: {
            '0%': { transform: 'scale(0.5)' },
            '50%': { transform: 'scale(1.1)' },
            '100%': { transform: 'scale(1)' }
          }
        },
        animation: {
          zoomIn: 'zoomIn 0.3s ease-in-out'
        }
      }
    }
  }
}

const AspectUITheme = (config: Config, color = colors): Config => {
  const twConfigForKeepReact = {
    darkMode: 'selector',
    content: ['node_modules/aspect-ui/**/*.{js,jsx,ts,tsx}'],
    presets: [presetStyle(color)]
  }

  return merge(twConfigForKeepReact, { ...config })
}

export { colors, AspectUITheme }
