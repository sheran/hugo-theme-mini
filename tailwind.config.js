/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{html,js}",
    "./layouts/**/*.{html,js}",
    "../../content/**/*.{html,js}", // To handle the site content and layouts as well. Ugly but whatever.
    "../../layouts/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

