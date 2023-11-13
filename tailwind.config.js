/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "414px",
      tablet: "800px",
      web: "1440px",
    },
  },
  plugins: [],
};
