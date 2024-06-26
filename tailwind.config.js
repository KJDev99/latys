/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Dark mode rejimini yoqish
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "screen-minus-80": "calc(100vh - 80px)",
      },
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
