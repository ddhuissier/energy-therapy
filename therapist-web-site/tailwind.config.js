/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brown: {
          50: "#d3b7ab",
          100: "#7E6F67",
        },
      },
    },
  },
  plugins: [],
};
