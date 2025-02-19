/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "white-200": "#f3f3f3",
        "light-orange": "#FF662D",
        "light-orange-100": "#ff9871",
        "light-red": "#DA2C2D",
        "light-pink": "#E98178",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        card2: "0px 10px 30px -10px #211e35"
      },
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "hero": "url('/src/assets/bg-hero.png')",
      },
      boxShadow:{
        'glass-inset': 'inset 0 17px 5px -9px rgba(255,102, 45, 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(255,102,45, 0.3)',
      },
      keyframes:{
        'spin-reverse':{
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(-360deg)'}
        },
        'upDown': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation:{
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
        'up-down': 'upDown 3s ease-in-out infinite', // New up-down animation
      },
    },
  },
  plugins: [  ],
};
