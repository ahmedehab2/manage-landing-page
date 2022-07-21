/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "script.js"],
  theme: {
    extend: {
      fontFamily: {
        Vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        "dark-blue": "#242d52",
        "darker-blue": "#1d1e25",
      },
      keyframes: {
        dropDown: {
          "0%": { transform: "translateY(-300px)" },
          "70%": { transform: "translateY(50px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        dropDown: "dropDown 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
