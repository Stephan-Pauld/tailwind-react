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
        wyBlue: '#102A43',
        wyLtBlue: '#486581',
        wyLtGreen: '#8EEDC7',
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
    screens: {
      'hide': '1px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

  },
  variants: {},
  plugins: [],
}