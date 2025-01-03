/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{html,js}",
    "./*.{html,js}",
    "./components/**/*.{html,js}",
    "./trial/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
