/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "350px",
      largeMobile: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1536px",
    },
    container: {
      center: "true",
    },
    extend: {
      colors: {
        grayText: "rgb(24, 28, 50)",
        grayBackground: "rgb(30,31,44)",
        grayButtonBackgrond: "rgb(41,46,72)",
        grayTextLight: "rgb(181, 181, 195)",
        grayHeader: "rgb(94, 98, 120)",
        blueText: "rgb(0, 115, 233)",
        blueCardBackground: "rgb(224,240,254)",
        blueHeaderBackground: "rgb(55,153,254)",
        activeBackground: "rgb(243,246,249)",
        hamburgerGray: "rgb(72,78,103)",
      },
    },
  },
  plugins: [],
};
