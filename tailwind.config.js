const typography = require('./src/styles/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: typography.fontFamily,
      fontWeight: typography.fontWeight,
      fontSize: typography.fontSize,
      colors: {
        white: '#FFFFFF',
        background: { gray: '#F2F4F6', accent_light: '#E0F5FF' },
        primary: '#1A2128',
        secondary: '#6D7882',
        tertiary: '#8E98A0',
        accent: '#00AFFF',
        divider: '#E6E8EB',
        disabled: '#CFD5D9',
        field: {
          border_default: '#F2F4F6',
        },
      },
    },
  },
  plugins: [],
};
