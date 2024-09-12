/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  lightMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontfamily: {
        'san': ['Euclid-Circular-A']
      }
    },
  },
  plugins: [],
}

