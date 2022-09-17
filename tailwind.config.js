/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
      light: "#eef"
     },
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
