module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-header-text-1': '#0066FF',
        'my-header-text-2': '#83BBFF',
        'my-text': '#2B2424',
        'my-tableHeader': '#25282A',
        "my-background": "#f4f4f4",
      },
      backgoundColor: {
        "my-background": "#181A1B",
      },
      fontFamily: {
        'fredoka': ['Fredoka One', 'cursive'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
};

