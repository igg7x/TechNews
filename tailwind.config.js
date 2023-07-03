/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,html}"],
  theme: {
    extend: {
      colors: {
        text: "#f0f0f0",
        background: "#0d0d0d",
        primaryBtn: "#919191",
        secondaryBtn: "#080808",
        accent: "#47595c",
      },
      fontFamily: {
        text: ["Roboto Slab", "sans-serif"],
        title: ["Bacasime Antique", "sans-serif"],
      },
    },
  },
  plugins: [],
};
