/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "product-sans": ["ProductSans"],
      },
      colors: {
        "primary-purple": "#4E598C",
        "primary-dark": "#4F4F4F",
        "primary-orange": "#F2994A",
        "secondary-purple": "#817E9E",
        "inactive-grey": "#BDBDBD",
        "primary-red": "#EB5757",
        "btn-grey": "#F7F7FF",
        "primary-blue": "#2F80ED",
      },
    },
  },
  plugins: [],
};
