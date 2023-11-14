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
                "screen-d": "100dvh",
            },
            fontSize: {
                "heading-small": ["1.125rem", { lineHeight: "1.6875rem" }],
                "paragraph-small": ["0.875rem", { lineHeight: "1.3125rem" }],
                "paragraph-x-small": ["0.75rem", { lineHeight: "1.125rem" }],
                overline: [
                    "0.75rem",
                    { lineHeight: "1.125rem", letterSpacing: "2.4px" },
                ],
            },
            textColor: {
                primary: "#F1F5F9",
                secondary: "#94A3B8",
                placeholder: "#475569",
                brand: {
                    purple: "#7A5AF8",
                },
            },
            borderColor: {
                primary: "#334155",
                brand: "#7A5AF8",
            },
            colors: {
                surface: {
                    brand: "#7A5AF8",
                    primary: "#0F172A",
                    secondary: "#1E293B",
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
                x6: "1.5rem",
            },
            borderRadius: {
                medium: "8px",
            },
            boxShadow: {
                "brand-focus-ring": "0px 0px 4px 2px rgba(122, 90, 248, 0.25)",
            },
            opacity: {
                35: "0.35",
            },
        },
    },
};
