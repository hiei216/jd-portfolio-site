/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#155e95",
        "light-blue": "#eaf4fc",
        red: {
          200: "#FFCC8D",
          500: "#EB773E",
          600: "#B64B13",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      fontSize: {
        "header-clamp": "clamp(1rem, 5vw, 2rem)",
        clamp: "clamp(0.8rem, 5vw, 1.5rem)",
      },
    },
  },
  plugins: [],
};
