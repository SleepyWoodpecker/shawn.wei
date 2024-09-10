/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      sans: ["Raleway", "sans"],
    },
    extend: {},
    screens: {
      phone: { max: "470px" },
    },
  },
  plugins: [],
};
