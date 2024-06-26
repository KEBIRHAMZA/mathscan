/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        'readex-pro': ['"Readex Pro"', 'sans-serif'],
      },
      width: {
        '800': '1600px',
        '460':'460px'
      },
    },
  },
  plugins: [],
}

