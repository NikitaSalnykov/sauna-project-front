/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '420px',
      md: '768px',
      lg: '1480px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '1rem',
        },
      },

      colors: {
        yellow: '#FFC107',
        white: '#FFF',
        background: '#FEF9F9',
        blue: '#54ADFF',
        black: '#111',
        lightBlue: '#CCE4FB',
        green: '#00C3AD',
        red: '#F43F5E',
        grey: '#888888',
      },
      boxShadow: {
        default: '3px 8px 14px 0px rgba(136, 198, 253, 0.19)',
        focus: '7px 13px 14px rgba(116, 177, 232, 0.24)',
      },
    },
  },
  plugins: [],
};
