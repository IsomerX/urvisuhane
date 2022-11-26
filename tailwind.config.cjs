/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                voyage: ["Voyage", "sans-serif"],
                mont: ["Montserrat", "sans-serif"],
            },
            colors: {
                pink: "#9F67C1",
                "pink-light": "#543A6D",
                gray: "#909090",
            },
        },
    },
    plugins: [],
};
