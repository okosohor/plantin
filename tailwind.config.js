/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#04BF94',
            light: 'rgba(4, 191, 148, 0.16)',
            gradient: {
              start: '#CFEDE6',
              end: 'rgba(140, 222, 203, 0.83)',
            }
          },
          white: '#F6F6F6',
          black: {
            DEFAULT: '#000000',
            secondary: '#262626',
            title: '#242424'
          },
          grey: {
            DEFAULT: '#78787A',
            light: '#ADB8C8',
            dark: '#242424',
            silver: '#E0E5EE',
            secondary: '#E0E5EE',
            text: '#91A0B6'
          },
        },
      },
      boxShadow: {'custom-shadow': '0px 0.4px 6.5px #0000000D, 0px 2px 40px #0000001A'
      },
    },
  },
  plugins: [],
}