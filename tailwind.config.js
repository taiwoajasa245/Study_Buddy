/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { 
        document:['Space Grotesk']
      }, 
      spacing: { 
        '4rem':'4rem', 
      }, 
      backgroundImage: {
        'forest-view': "url('/dist/img/b4b9101e8cdbad99d7b0.jpg')", 
      }, 
      animation: {
        'spin': 'spin .5s linear 1',
      }

    },
  },
  plugins: [],
}

