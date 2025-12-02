/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard Variable',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif',
        ],
      },
      fontWeight: {
        bold: 600,
        medium: 500,
        regular: 400,
      },
      colors: {
        white: '#FFFFFF',
        background: '#F2F4F6',
        primary: '#1A2128',
        secondary: '#6D7882',
        tertiary: '#8E98A0',
        accent: '#00AFFF',
      },
      fontSize: {
        heading3: [
          '20px',
          {
            fontWeight: 600,
            lineHeight: '28px',
            letterSpacing: '0em',
          },
        ],
        title2: [
          '15px',
          {
            fontWeight: 500,
            lineHeight: '22px',
            letterSpacing: '0em',
          },
        ],
      },
    },
  },
  plugins: [],
};
