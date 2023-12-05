const baseURL = '/markup-editor';

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
        baseURL,
        head: {
            title: 'Markup Editor',
            htmlAttrs: { lang: 'en' },
            bodyAttrs: { class: 'text-stone-100 bg-black' },
            link: [{ rel: 'icon', type: 'image/svg+xml', href: `${baseURL}/favicon.svg` }]
        }
    }
});
