const colors = require('tailwindcss/colors')
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      trueGray: colors.trueGray,
      teal: colors.teal,
      sky: colors.sky,
      rose: colors.rose 
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px"
      // => @media (min-width: 1280px) { ... }
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};