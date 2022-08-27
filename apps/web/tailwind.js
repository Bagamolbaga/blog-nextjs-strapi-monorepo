const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    screens: {
      "2xl": "1536px",
      xl: { max: "1200px" },
      content: { max: "1140px" },
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      gray: "#4a4a4a",
      red: "#f56642",
      lightBlue: "#6381a4",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      secondary: ["Poppins", "sans-serif"],
    },
    extend: {
      width: {
        34: "8.5rem",
      },
      minWidth: {
        "screen-1/5": "20vw",
      },
      maxWidth: {
        content: "1140px",
        box: "888px",
      },
      height: {
        13: "3.25rem",
        58: "14.5rem",
        76: "19rem",
      },
      minHeight: {
        desktopMinHeight: "580px",
      },
      maxHeight: {
        navMenu: `calc(100vh - ${defaultTheme.spacing["20"]})`,
      },
      scale: {
        99: "0.99",
        97: "0.97",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionDelay: {
        350: "350ms",
        400: "400ms",
      },
      transitionProperty: {
        width: "width",
        translateWithWidth: "width translate",
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
      boxShadow: {
        white: "0.3rem .3rem 0 rgba(255, 255, 255, 1)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
};
