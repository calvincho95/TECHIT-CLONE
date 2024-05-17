/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: { "techit-gray": { 100: "#222222" } } },

    fontFamily: {
      pretendard: ["Pretendard"],
    },
  },
  plugins: [],
};
