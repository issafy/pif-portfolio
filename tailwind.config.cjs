/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#FEF7D8",
        secondary: "#E7C923",
        tertiary: "#252004",
        quaternary: "#494008",
        darkest: "#121002",
        lightest: "#FEF7D8",
        primary_dark: "#051505",
        secondary_dark: "#a9c3a7",
        tertiary_dark: "#113216",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "green-1000": "#002106",
        "yellow-1000": "#252004"
        
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern_light": "url('/src/assets/light_wall.jpg')",
        "hero-pattern_dark": "url('/src/assets/dark_wall.jpg')",
      },
    },
  },
  plugins: [],
};
