/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./index.html", 
    "./src/**/*.{js,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#272822',
        secondarybg: '#3a3b36',
        primary: 'white',
        secondary: '#E14761',
        tertiary: '#e2bcbc',
        
      },
      screens: {
        'lg': '1125px', // Cambiar el punto de quiebre de lg a 1125px
      },
    },
  },
  plugins: [
    /* require('tailwindcss-animated') */
  ],
}
