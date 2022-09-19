/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#eef",
      },
      fontFamily: {
        extra: {
          // font- family: 'Nunito', sans- serif;
          dark: "'Space Mono', monospace",
        },
        headline: "'Poppins', sans-serif",
        currency: "'Chakra Petch', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
