/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#5142FC",
        done: "#47A432",
        warning: "#FFBD0C",
        critical: "#DF4949",
        onSurface: "#FFFFFF",
        secondary: "#EBEBEB",
        fontColor: " #FAFAFC",
        footer: "#0D0D11",
        nftBg: "#343444",
        userType: "#8A8AA0",
        coutdown: "#14141F",
      },
    },
  },
  plugins: [],
};
