/****************
 * Tailwind CSS v3 config
 ****************/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1F7A8C',
          dark: '#0F5257',
          light: '#4CC9F0'
        },
        accent: '#F72585',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(79, 209, 197, 0.3)'
      },
    },
  },
  plugins: [],
}
