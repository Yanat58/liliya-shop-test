/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#FE81C5",
        dimBlack: "#797979",
        borderColor: '#959595'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      sm: "390px",
      md: "768px",
      xl: "1440px",
    },
  },
  plugins: [],
}

