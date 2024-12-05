/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      conter: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#c026d3',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}
