/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowShade: "#E8CE6A",
        darkShadeA: "#333333",
        darkShadeB: "#AFAFAF",
        darkShadeC: "#3D3D3D",
      },
      fontFamily: {
        bruno: ['"Bruno Ace SC"', 'sans-serif'], 
        sans: ['"Open Sans"', 'sans-serif'],  
      },
    }
  },
  plugins: [],
}