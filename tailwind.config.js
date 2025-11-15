import colors from "tailwindcss/colors";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "12.5": "50px",
      },
      colors: {
        primary: {
          light: "rgb(245,148,148)",
          default: "rgb(255,81,81)", 
          dark: "rgb(248,47,47)",
          darkest: "rgb(230,47,47)",
        },
        gray: {
          200: "rgb(244,245,246)",
          400: colors.gray[400], // no 'all' key
          700: colors.gray[700],
          100: colors.gray[100],
        },
        white: colors.white,
        black: colors.black,
        blue: colors.blue,
      },
    },
  },
  plugins: [],
};
