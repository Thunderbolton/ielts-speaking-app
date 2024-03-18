/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      'xs': '475px',
      'sm': '500px',
      'md': '650px',
      'lg': '950px'
    },
    extend: {
      colors: {
        'turqoise-dark': '#0098a5',
        'turqoise-light': '#e3f6f9',
      },
    },
  },
  plugins: [],
}
