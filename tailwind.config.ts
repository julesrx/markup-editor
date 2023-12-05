import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
        './nuxt.config.ts'
    ],
    theme: {
        extend: {
            typography: ({ theme }: { theme: (val: string) => string }) => ({
                stone: {
                    css: {
                        '--tw-prose-invert-body': theme('colors.stone[200]')
                    }
                }
            })
        }
    },
    plugins: [typography]
};

export default config;
