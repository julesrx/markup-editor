export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    css: ['~/assets/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    app: { head: { title: 'Markup Editor' } }
});
