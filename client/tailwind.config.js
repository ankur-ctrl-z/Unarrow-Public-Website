/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Roboto:[ "Roboto Serif", "serif"],
        Archivo :["Archivo Black", "sans-serif"]
      }
    },
  },
  plugins: [],
}