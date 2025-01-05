/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nicon': ['Niconne', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'popins': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundColor: {
        'primary':"#3758F9"
      },
      backgroundImage:{
        'heroimg':"url(./src/assets/heroimg.jpg)",
      }
    },
  },
  plugins: [],
}