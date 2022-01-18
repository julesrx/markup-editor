import defaultTheme from 'windicss/defaultTheme';

export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: defaultTheme.colors.light['50'],
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282'
              }
            }
          }
        }
      }
    }
  },
  plugins: [require('windicss/plugin/typography')]
};
