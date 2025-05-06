/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Example: Blue-700
        secondary: "#FBBF24", // Example: Amber-400
        neutral: "#4B5563", // Example: Gray-600
        lightbg: "#F9FAFB", // Example: Gray-50
        darktext: "#1F2937", // Example: Gray-800
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example: Inter
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
