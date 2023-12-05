import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
    darkMode: 'class',
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
        './nuxt.config.ts'
    ],
    theme: { extend: {} },
    plugins: [typography]
};

export default config;
