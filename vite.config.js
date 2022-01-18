import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import windicss from 'vite-plugin-windicss';
import raw from 'vite-raw-plugin';

export default defineConfig({
  plugins: [vue(), windicss(), raw({ fileRegex: /\.md$/ })]
});
