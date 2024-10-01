/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-md': { 'max': '767px' },  // applies when width is <= 767px
        'max-lg': { 'max': '1100px' }, // applies when width is <= 1023px
      },
    },
  },
  plugins: [],
}