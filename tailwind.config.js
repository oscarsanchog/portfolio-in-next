/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#272822',
        primary: 'white',
        secondary: '#E14761',
        tertiary: '#e2bcbc',
        
      },
    },
  },
  plugins: [],
}
