const plugin = require('tailwindcss/plugin')
import type { Config } from 'tailwindcss'

const textShadow = plugin(function ({
  matchUtilities,
  theme
}: {
  matchUtilities: any
  theme: any
}) {
  matchUtilities(
    {
      'text-shadow': (value: string) => ({
        textShadow: value
      })
    },
    { values: theme('textShadow') }
  )
})

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '470px',
        xsl: '570px',
        mds: '670px',
        sml: '900px',
        mdl: '970px',
        xml: '1170px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero.jpg')",
        'hero-gradient':
          'linear-gradient(180deg, rgba(0,0,0,0.4) 40%, rgb(255, 253, 250, 0.1) 100%)'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)'
      },
      colors: {
        display: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d',
          DEFAULT: '#000000'
        },
        background: {
          50: '#faf5eb',
          100: '#f5ebd6',
          200: '#ebd6ad',
          300: '#e0c285',
          400: '#d6ad5c',
          500: '#cc9933',
          600: '#a37a29',
          700: '#7a5c1f',
          800: '#523d14',
          900: '#291f0a',
          950: '#140f05',
          DEFAULT: '#fefdfb'
        },
        primary: {
          50: '#fceae8',
          100: '#f9d4d2',
          200: '#f4aaa4',
          300: '#ee7f77',
          400: '#e95449',
          500: '#e3291c',
          600: '#b62116',
          700: '#881911',
          800: '#5b110b',
          900: '#2d0806',
          950: '#170403',
          DEFAULT: '#400c08'
        },
        secondary: {
          50: '#fbf3e9',
          100: '#f7e8d4',
          200: '#efd1a9',
          300: '#e7ba7e',
          400: '#dfa253',
          500: '#d78b28',
          600: '#ac6f20',
          700: '#815418',
          800: '#563810',
          900: '#2b1c08',
          950: '#160e04',
          DEFAULT: '#efd1a9'
        },
        accent: {
          50: '#f5f0f0',
          100: '#eae1e1',
          200: '#d6c2c2',
          300: '#c1a4a4',
          400: '#ac8686',
          500: '#986767',
          600: '#795353',
          700: '#5b3e3e',
          800: '#3d2929',
          900: '#1e1515',
          950: '#0f0a0a',
          DEFAULT: '#986767'
        }
      }
    },
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
      '6xl': '5.614rem',
      '7xl': '7.485rem',
      '8xl': '9.980rem',
      '9xl': '13.307rem'
    },
    fontFamily: {
      heading: 'League Spartan',
      body: 'Quicksand'
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    borderRadius: {
      DEFAULT: '0.25rem',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '3.5rem',
      '8xl': '4rem',
      '9xl': '4.5rem'
    }
  },
  plugins: [textShadow]
}

export default config
