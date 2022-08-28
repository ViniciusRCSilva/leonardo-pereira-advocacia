/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'] ,
        'raleway': ['Raleway' , 'sans-serif']
      },
      backgroundImage: {
        'banner': "url('../img/banner.jpeg')",
        'banner2': "url('../img/banner2.jpg')",
      }
    },
  },
  plugins: [],
}
