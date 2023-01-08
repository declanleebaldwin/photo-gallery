/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "gallery": "repeat(3 ,minmax(0,1fr))",
      }
    },
  },
  plugins: [],
}
