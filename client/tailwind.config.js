/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './container/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)'],
      },
      colors: {
        primary: '#EC5E3F',
        secondary: '#393939',
        accent: '#525252',
        gray: '#d9dbe1',
      },
      dropShadow: {
        primary: '0 0 4px #0BFAE9',
      },
      boxShadow: {
        primary:
          '2.4252px 2.4252px 19.4016px rgba(0, 0, 0, 0.08), 1.2126px 2.4252px 4.85039px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
