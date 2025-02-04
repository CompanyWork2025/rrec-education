/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        expressa: ['Expressa Serial Regular', 'serif'], 
        tilt_prism: ['"Tilt Prism"', 'sans-serif'],
      },
      animation: {
        ticker: 'ticker 15s linear infinite', // Scrolling text animation
        zoomEffect: 'zoomEffect 20s infinite alternate',
        colorCycle: 'colorCycle 4s infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },  
          '100%': { transform: 'translateX(-100%)' }, 
        },
        zoomEffect: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        colorCycle: {
          '0%': { color: 'red' },
          '25%': { color: 'yellow' },
          '50%': { color: 'green' },
          '75%': { color: 'blue' },
          '100%': { color: 'red' },
        },
      },
    },
  },
  plugins: [],
};
