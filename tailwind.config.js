/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "black": '#141414',
        "redColor" : '#ED2024',
        'grayColor': '#262626',
        'cardbg': '#1A1A1A',
        'cardborder': '#262626'
      }
    },
  },
  plugins: [],
}