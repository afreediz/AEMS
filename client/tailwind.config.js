/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        spacing:{
          '80vh':'80vh',
          '50vh':'50vh'
        }
      },
    },
    plugins: [],
  }