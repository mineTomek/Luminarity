import type { Config } from 'tailwindcss'
import { PluginAPI } from 'tailwindcss/types/config'

const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e2eee2',
          200: '#c5dcc6',
          300: '#a8cba9',
          400: '#8bb98d',
          500: '#6ea870',
          600: '#58865a',
          700: '#426543',
          800: '#2c432d',
          900: '#162216',
          950: '#101511',
        },
        error: {
          100: '#eee2e3',
          200: '#dcc5c6',
          300: '#cba8aa',
          400: '#b98b8d',
          500: '#a86e71',
          600: '#86585a',
          700: '#654244',
          800: '#432c2d',
          900: '#221617',
        },
      },
      height: {
        'dvh-10': '10dvh',
        'dvh-20': '20dvh',
        'dvh-30': '30dvh',
        'dvh-40': '40dvh',
        'dvh-50': '50dvh',
        'dvh-60': '60dvh',
        'dvh-70': '70dvh',
        'dvh-80': '80dvh',
        'dvh-90': '90dvh',
      },
      minHeight: {
        'dvh-10': '10dvh',
        'dvh-20': '20dvh',
        'dvh-30': '30dvh',
        'dvh-40': '40dvh',
        'dvh-50': '50dvh',
        'dvh-60': '60dvh',
        'dvh-70': '70dvh',
        'dvh-80': '80dvh',
        'dvh-90': '90dvh',
      },
      maxWidth: {
        'vw-10': '10vw',
        'vw-20': '20vw',
        'vw-30': '30vw',
        'vw-40': '40vw',
        'vw-50': '50vw',
        'vw-60': '60vw',
        'vw-70': '70vw',
        'vw-80': '80vw',
        'vw-90': '90vw',
      },
      fontSize: {
        'tl': '15vw',
        'tm': '7vw',
        'ts': '3vw'
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    }),
  ],
}
export default config
