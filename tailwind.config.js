/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navColor: "#ebebeb",
        navShade: "#374785",
        navText: "#000000",
        mainBg: "#fffdf6",
        terminalBg: "#fcfcfa",
        mainText: "#f76c6c",
        buttonColor: "#43397c",
      },
    },
  },
  plugins: [],
};
