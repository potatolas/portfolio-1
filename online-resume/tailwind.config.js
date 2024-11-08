/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,vue}'
  ],
  theme: {
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      serif: ['Inconsolata', 'serif'],
    },
    extend: {
      grayscale: {
        85: '85%',
      }
    },
  },
  plugins: [],
}
