/* eslint-env node */

const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx,vue}"],
    darkMode: ["class"],
    plugins: [animate],
};
