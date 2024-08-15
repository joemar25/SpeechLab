/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-tw': '#162239',
        'secondary-tw': '#F5A425',
        'tertiary-tw': '#D9D9D9',

        'bg-tw': '#F3F7FC',

        'primary-tint-tw': '#92B1F5',
        'secondary-tint-tw': '#EDB53B',
        

        'primary-text-tw': '#ECE6F0',
        'secondary-text-tw': '#000000',
        'green-tw': '#00FF3C',

        'background-tw': '#EDEDED',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      fontSize: {
        'xs': '12px',
      },
      boxShadow: {
        'sd': '0px 2px 20px 5px rgba(0, 0, 0, 0.3)',
        'inner-custom': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      screens: {
        'xs': '440px',

      }
    },
  },
  plugins: [],
}