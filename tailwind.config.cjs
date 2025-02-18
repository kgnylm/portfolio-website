/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0891b2",
        secondary: "#1e293b",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        blob: "blob 7s infinite",
        floating: "floating 10s infinite",
        wave: "wave 10s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        floating: {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
            opacity: "0.5",
          },
          "50%": {
            transform: "translateY(-20px) translateX(10px)",
            opacity: "0.2",
          },
        },
        wave: {
          "0%": { transform: "translateX(0) scaleY(1)" },
          "25%": { transform: "translateX(-25%) scaleY(0.9)" },
          "50%": { transform: "translateX(-50%) scaleY(1.1)" },
          "75%": { transform: "translateX(-75%) scaleY(0.95)" },
          "100%": { transform: "translateX(-100%) scaleY(1)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "50px 50px",
      },
    },
  },
  plugins: [],
};
