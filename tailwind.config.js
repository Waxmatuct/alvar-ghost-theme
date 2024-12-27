/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    content: ["./*.hbs", "./**/*.hbs"],
    darkMode: "selector", // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                "3xl": "0 0 20px 2px rgba(0, 0, 0, 0.3)",
            },
            container: {
                center: true,
            },
        },
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            mono: ["Ubuntu Mono", "monospace"],
        },
        colors: {
            // current: "currentColor",
            dark: {
                DEFAULT: "rgb(32,32,32)", //#111827
                lighter: "rgb(50,50,50)", //#161e2d
                gray: "#777",
            },

            light: {
                DEFAULT: "#ffffff",
                white: "#f9f9fa",
                gray: "#e9e9e9",
            },

            black: "#374151",
            gray: "#9ca3af",
            "gray-900": "#1f2937",

            primary: {
                DEFAULT: "#0ba057", //#98c376
                darker: "#48bb78",
            },
        },
        borderWidth: {
            DEFAULT: "1px",
            0: "0",
            2: "2px",
            3: "3px",
            4: "4px",
            5: "5px",
            6: "6px",
            7: "7px",
            8: "8px",
        },
    },
    plugins: [],
};
