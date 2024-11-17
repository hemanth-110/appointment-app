/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': "#168a20"
      },
      gridTemplateColumns: {
        "auto": 'repeat(auto-fill, minmax(210px, 1fr))'
      }
    },
  },
  plugins: [],
}
