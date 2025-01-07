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
      },
      boxShadow: {
        'light': '0 4px 12px rgba(0, 0, 0, 0.1)',  
        'medium': '0 8px 20px rgba(0, 0, 0, 0.2)',
        'dark': '0 10px 30px rgba(0, 0, 0, 0.3)',   
      },
    },
  },
  plugins: [],
}