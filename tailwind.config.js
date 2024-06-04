/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        inter: ['Inter'],
      },
      colors: {
        inputBg: 'rgba(128, 152, 249, 0.1)',
        inputBorder: 'rgba(128, 152, 249, 0.5)',
        inputText: 'rgba(45, 49, 166, 0.2)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

