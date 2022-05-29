module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        offwhite: '#fefaf6',
        brightblue: '#5880ff',
        brightgreen: '#67d500',
        brightpink: '#ff6682',
        brightyellow: '#ffbe00',
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
