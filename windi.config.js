import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',
  //   theme: {
  //     extend: {
  //       typography: {
  //         DEFAULT: {
  //           css: {
  //             color: '#fafafa',
  //           },
  //         },
  //       },
  //     },
  //   },
  plugins: [typography({ dark: true })],
});
