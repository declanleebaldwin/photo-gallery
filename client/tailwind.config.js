/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "gallery": "repeat(3, minimax(1, 1fr))"
      }
    },
  },
  plugins: [],
}
