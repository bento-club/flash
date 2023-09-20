/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          200: "#E5E7EB",
          500: "#6B7280",
        },
      },
    },
  },
  plugins: [],
};
