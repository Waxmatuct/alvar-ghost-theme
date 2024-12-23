/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    content: ["./*.hbs", "./**/*.hbs"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Rubik", "sans-serif"],
            mono: ["Ubuntu Mono", "monospace"],
        },
        colors: {
            // current: "currentColor",
            dark: {
                DEFAULT: "#181818", //#111827
                lighter: "#202020", //#161e2d
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
