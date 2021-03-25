module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#334E68',
        secondary: '#D9E2EC',
        cardTitle: '#102A43',
        cardSub: '#334E68',
        cardBg: '#fff',
        buttonBg: '#0C6B58',
        buttonText: '#EFFCF6',
      },
      fontFamily: {
        body: ['Noto Sans TC']
      },
      spacing: {
        '100': '35rem',
        '84': '21rem',
        '96': '24rem',
      }
    },
  },
  variants: {},
  plugins: [],
}