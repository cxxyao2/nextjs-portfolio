/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: { shine: 'shine 1s' },
      keyframes: { shine: { '100%': { left: '125%' } } },
      backgroundSize: {
        'size-200': '200% 200%'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')]
}
