/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          moderateViolet: 'hsl(263, 55%, 52%)',
          veryDarkBrownish: 'hsl(217, 19%, 35%)',
          veryDarkBlackish: 'hsl(219, 29%, 14%)',
          white: 'hsl(0, 0%, 100%)'
        },
        neutral: {
          lightGray: 'hsl(0, 0%, 81%)',
          lightGrayishBlue: 'hsl(210, 46%, 95%)'
        }
      },
      screens: {
        halfxl: '1440px',
      },

      fontFamily: {
        primary: "Barlow Semi Condensed",
      },
      fontWeight: {
        bold500: '500',
        bold600: '600',
      },
      borderWidth: {
        3.5: '3.5',   
      }

    },
  },
  plugins: [],
}

