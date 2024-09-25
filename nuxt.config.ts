// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0",
                },
            ],
        },
    },
    css: [
        "@/assets/style-global.css",
        "@mdi/font/css/materialdesignicons.min.css",
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    plugins: [{ src: "/plugins/keen-slider.js", mode: "client" }],
    devtools: { enabled: true },
});
