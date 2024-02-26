/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'off-white': {
          DEFAULT: '#BABABA',
          100: '#FFFFFF',
          200: '#F7F7F7',
          300: '#E3E3E3',
          400: '#CECECE',
          500: '#BABABA',
        },
        dark: {
          DEFAULT: '#1C1C1E',
        },
        'soft-dark': {
          DEFAULT: '#2A2A2F',
        },
      },
    },
  },
  plugins: [],
}
