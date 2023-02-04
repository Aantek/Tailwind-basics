/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
      mono: ['Rokkitt', 'monospace'],
      NFTfont: ['Outfit'];
    },
    
    extend: {},
  },
  plugins: [],
}
