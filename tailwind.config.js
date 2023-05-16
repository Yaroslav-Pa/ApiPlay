/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./assets/css/*.css",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#2F5D62",
        menuColor: "#5E8B7E",
        secondColor: "#A7C4BC",
        firstColor: "#DFEEEA",
      },
    },
  },
  plugins: [],
};
