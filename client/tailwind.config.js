// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#151515",
                primary: "#4645CD",
                secondary: "#252537",
                mainText: "#FFFFFF",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};