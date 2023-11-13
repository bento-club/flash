/* eslint-env node */

const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx,vue}"],
    darkMode: ["class"],
    plugins: [animate],
    theme: {
        extend: {
            fontFamily: {
                lexend: ["Lexend"],
                "space-grotesk": ["Space Grotesk"],
            },
            height: {
                "h-screen-d": "100dvh",
            },
            fontSize: {
                "heading-small": ["1.125rem", { lineHeight: "1.6875rem" }],
                "paragraph-small": ["0.875rem", { lineHeight: "1.3125rem" }],
            },
            textColor: {
                primary: "#F1F5F9",
                secondary: "#94A3B8",
            },
            borderColor: {
                primary: "#334155",
            },
            colors: {
                surface: {
                    brand: "#7A5AF8",
                    primary: "#0F172A",
                    tertiary: "#334155",
                },
                primary: {
                    700: "#5925DC",
                },
            },
            spacing: {
                x2: "0.5rem",
                x3: "0.75rem",
                x4: "1rem",
            },
            borderRadius: {
                medium: "8px",
            },
        },
    },
};
