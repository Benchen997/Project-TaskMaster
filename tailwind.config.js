module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myHeader: 'hsl(222.1, 65.5%, 34.1%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

