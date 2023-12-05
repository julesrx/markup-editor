const baseURL = '/markup-editor';

export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    modules: ['@pinia/nuxt', '@vueuse/nuxt'],
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
            htmlAttrs: { lang: 'en', class: 'dark' },
            bodyAttrs: { class: 'text-stone-200 bg-stone-950' },
            link: [{ rel: 'icon', type: 'image/svg+xml', href: `${baseURL}/favicon.svg` }]
        }
    }
});
