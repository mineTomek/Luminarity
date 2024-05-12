import type { Config } from 'tailwindcss'

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
    },
  },
  plugins: [],
}
export default config
