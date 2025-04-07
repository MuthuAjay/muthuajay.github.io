/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'skill-fill': 'skill-fill 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 10s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'zoom-in': 'zoomIn 0.6s ease-out forwards',
      },
      keyframes: {
        'skill-fill': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 0.7 },
        },
        'glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 2px rgba(45, 212, 191, 0.3))' },
          '50%': { filter: 'drop-shadow(0 0 5px rgba(45, 212, 191, 0.5))' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slideUp': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slideDown': {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slideLeft': {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slideRight': {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'zoomIn': {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        'skill': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
        'skill-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};