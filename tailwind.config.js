const plugin = require('tailwindcss/plugin')



module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        accent: 'var(--color-bg-accent)',
        input: 'var(--color-bg-input)',
        'btn-primary': 'var(--color-bg-btn-primary)',
        'menu-primary': 'var(--color-bg-menu-primary)',
        'menu-secondary': 'var(--color-bg-menu-secondary)',
        'menu-active': 'var(--color-menu-active)',
        'chat-yours': 'var(--color-chat-yours)',
        'chat-theirs': 'var(--color-chat-theirs)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
        accent: 'var(--color-border-accent)',
        'menu-active': 'var(--color-menu-active-border)',
      },
      borderWidth: {
        '3': '3px',
      },
      width: {
        '1/24'  : '4.1666667%',
        '2/24'  : '8.3333333%',
        '3/24'  : '12.5%',
        '4/24'  : '16.6666667%',
        '5/24'  : '20.8333333%',
        '6/24'  : '25%',
        '7/24'  : '29.166667%',
        '8/24'  : '33.333333%',
        '9/24'  : '37.5%',
        '10/24' : '41.666667%',
        '11/24' : '45.833333%',
        '12/24' : '50%',
        '13/24' : '54.166667%',
        '14/24' : '58.333333%',
        '15/24' : '62.5%',
        '16/24' : '66.666667%',
        '17/24' : '70.833333%',
        '18/24' : '75%',
        '19/24' : '79.166667%',
        '20/24' : '83.333333%',
        '21/24' : '87.5%',
        '22/24' : '91.666667%',
        '23/24' : '95.833333%',
        '24/24' : '100%',

        '1/7'   : '14.285714285%',
        '2/7'   : '28.571428571%',
        '3/7'   : '42.857142857%',
        '4/7'   : '57.142857142%',
        '5/7'   : '71.428571428%',
        '6/7'   : '85.714285714%',
        '7/7'   : '100%',


      }
    },
  },
  variants: ['responsive', 'hover', 'focus', 'active', 'dark'],

  plugins: [
      plugin(function({addVariant, theme, e}) {
          const darkSelector = theme('darkSelector', '.theme-dark');
          addVariant('dark', ({modifySelectors, separator}) => {
              modifySelectors(({className}) => {
                  return `${darkSelector} .${e(`dark${separator}${className}`)}`;
              });
          })
      })
  ],
};
