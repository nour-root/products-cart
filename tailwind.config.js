/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#c73a0f",
        "custom-green": "#1ea475",
        rose: {
          50: "#fcf9f7",
          100: "#f4edeb",
          300: "#c9aea6",
          400: "#ad8985",
          500: "#87635a",
          900: "#260f08",
        },
      },
    },
  },
  plugins: [],
};
