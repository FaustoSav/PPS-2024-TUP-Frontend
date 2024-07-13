/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primaryDark: '#111111',
        secondaryDark: '#191919',
        BgDark: '#040406',
        bgLight: '#FAFAFA',
        bgSemiLight: '#f4f4f5',
        light: '#FEFAE0',
        darkLight: '#B4B4B4',
        brown: '#AE8C7E',
      },
      screens: {
        tablet: '500px',
      },
    },
  },
  plugins: [],
};
