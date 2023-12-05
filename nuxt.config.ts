export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    modules: ['@pinia/nuxt'],
    css: ['~/assets/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    app: {
        head: {
            title: 'Markup Editor',
            htmlAttrs: { lang: 'en' },
            bodyAttrs: { class: 'text-stone-100 bg-black' }
        }
    }
});
