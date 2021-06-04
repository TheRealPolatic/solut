// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#00E3A8',
        dark: '#262626',
        grey: '#FAF9F9',
        'dark-grey': '#C3C3C3',
        'darker-grey': '#6F6F6F',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '1/1': '100%',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '9/16': '56.25%',
      },
      borderRadius: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '32': '32px',
      },
    },
  },
}
