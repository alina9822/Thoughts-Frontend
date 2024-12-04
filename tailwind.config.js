/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navColor: "#ebebeb",
        navShade: "#374785",
        navText: "#000000",
        mainBg: "#a8d0e6",
        mainText: "#f76c6c",
      },
    },
  },
  plugins: [],
};
