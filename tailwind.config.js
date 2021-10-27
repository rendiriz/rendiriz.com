const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      serif: ['Prata', ...fontFamily.serif],
      mono: ['JetBrains Mono', ...fontFamily.mono],
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        fore: {
          primary: 'var(--color-fore-primary)',
          secondary: 'var(--color-fore-secondary)',
        },
        back: {
          primary: 'var(--color-back-primary)',
          secondary: 'var(--color-back-secondary)',
        },
      },
      zIndex: {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        75: 75,
        100: 100,
        auto: 'auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.3xl'),
          fontFamily: theme('fontFamily.serif'),
        },
        h2: {
          fontSize: theme('fontSize.2xl'),
          fontFamily: theme('fontFamily.serif'),
        },
        h3: {
          fontSize: theme('fontSize.xl'),
          fontFamily: theme('fontFamily.serif'),
        },
        h4: {
          fontSize: theme('fontSize.lg'),
          fontFamily: theme('fontFamily.serif'),
        },
        h5: {
          fontSize: theme('fontSize.base'),
          fontFamily: theme('fontFamily.serif'),
        },
      })
    }),
  ],
}
