/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#DFEEEA",
        secondary: "#2f5d62",
        tertiary: "#A7C4BC",
        primary_dark: "#051505",
        secondary_dark: "#a9c3a7",
        tertiary_dark: "#113216",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "green-1000": "#002106",
        
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern_light": "url('/src/assets/herobg_light.png')",
        "hero-pattern_dark": "url('/src/assets/herobg_dark.png')",
      },
    },
  },
  plugins: [],
};
