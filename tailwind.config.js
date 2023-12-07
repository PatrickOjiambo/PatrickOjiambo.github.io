/** @type {import('tailwindcss').Config} */
export default {
  // base: '/',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       
        Poppins: ['Poppins', "sans-serif"],
        Whisper: ['Whisper', "sans-serif"],
      },
      colors:{
        funnyOrange: "#D1A206"
      }
    },
  },
  plugins: [],

}