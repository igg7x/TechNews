/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,html}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Russo One", "sans-serif"],
        text: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
