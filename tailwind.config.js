module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["source-sans-pro", "sans-serif"],
        },
        extend: {
            colors: {
                primary: {
                    50: "#eaecfe",
                    100: "#c8cde9",
                    200: "#a6afd8",
                    300: "#8292c8",
                    400: "#6076b9",
                    500: "#465f9f",
                    600: "#374c7d",
                    700: "#263859",
                    800: "#162337",
                    900: "#030b16",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
