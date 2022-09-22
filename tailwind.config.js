/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*/*.html',],
  theme: {
    extend: {
      background: {
        'mobile-bg': "url('img/bg-simplify-section-mobile.svg')",
        'desktop-bg': "url('img/bg-simplify-section-desktop.svg')",
      },
      fontFamily: {
        'Vietnam': ['"Be Vietnam Pro"']
      },
      colors: {
        primary: {
          Bright_Red: "hsl(12, 88%, 59%)",
          Dark_Blue: " hsl(228, 39%, 23%)"
        },

        neutral: {
          Dark_Grayish_Blue: "hsl(227, 12%, 61%)",
          Very_Dark_Blue: "hsl(233, 12%, 13%)",
          Very_Pale_Red: "hsl(13, 100%, 96%)",
          Vary_Light_Gray: "hsl(0, 0%, 98%)"
        }

      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}
