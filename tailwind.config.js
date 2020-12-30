const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: {
        enabled: process.env.ENVIRONMENT === "production",
        content: ["./src/**/*.tsx"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {},
    variants: {
        extend: {},
    },
    plugins: [],
};
