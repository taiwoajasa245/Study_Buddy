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

    screens: {
      'tablet': '640px',
      => @media (min-width: 640px) { ... },

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  },
  plugins: [],
}

