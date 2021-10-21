import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // h2: { marginTop: '1rem' },
            img: { marginTop: '.5rem', marginBottom: '.5rem' }
          }
        }
      }
    }
  },
  plugins: [typography({ dark: true })]
});
