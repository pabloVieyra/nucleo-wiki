/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#87B847",
      secundary: "#1C1C1C",
      white: "#ffffff",
      white2: "#f4f4f4",
      cardDark: "#2F2F30",
      inputDark: "#404041",
      blueTopo: "#64748B",
      dark: "#000000",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
};
