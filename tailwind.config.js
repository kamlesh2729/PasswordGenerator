/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "mb-s": "319px",
        "Lp-l": "1440px",
        "4k": "2560px",
      },
    },
  },
  plugins: [],
};

