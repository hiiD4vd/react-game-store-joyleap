/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#1e293b', // slate-800 or similar
        darkCard: '#334155', // slate-700
        primaryCyan: '#06b6d4', // cyan-500
        primaryCyanHover: '#0891b2', // cyan-600
        priceRed: '#ef4444',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'neu-flat': '5px 5px 15px rgba(0, 0, 0, 0.35), -5px -5px 15px rgba(255, 255, 255, 0.1)',
        'neu-pressed': 'inset 5px 5px 15px rgba(0, 0, 0, 0.35), inset -5px -5px 15px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
