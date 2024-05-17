module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myHeader: '#7EAFE4',
        myBackground: '#181A1B',
        myText: '#F4F4F4',
        myTableHeader: '#25282A',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

