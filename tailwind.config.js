/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    fontFamily: {
      bayon: ["Bayon", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#ef4444",
      },
      screens: {
        "2xl": "1320px",
      },
      backgroundImage: {
        "hero-image": "url('./src/assets/img/hero.jpg')",
      },
      // backgroundPosition: {
      //   "bottom-4": "top bottom",
      // },
    },
  },
  plugins: [],
};
