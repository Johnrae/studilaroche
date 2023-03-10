/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          600: '#0083a3',
        },
        stone: {
          50: '#fbf7f3',
        },
        pink: {
          200: '#dcbab5',
          400: '#fadadd',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
