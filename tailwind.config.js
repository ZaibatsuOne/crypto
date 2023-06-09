/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontSize: {
        "caption-2": "0.65rem",
        "caption-1": "0.875rem",
        "body-regular": "1.125rem",
        "body-2": "1rem",
        "sub-heading-2": "0.875rem",
        button: "0.938rem",
        title: "1.125rem",
      },
    },
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
      "white-2": "#E5E5E5",
    },
  },
  plugins: [],
};
