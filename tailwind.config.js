module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        offwhite: '#fefaf6',
      },
      fontFamily: {
        sans: ['Lato', 'sans'],
        serif: ['Alegreya', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography') // eslint-disable-line
  ],
};
