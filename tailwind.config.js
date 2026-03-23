import animate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(212,175,55,0.20), 0 0 30px rgba(212,175,55,0.16)',
      },
      colors: {
        gold: {
          50: '#fff7e1',
          100: '#ffedc2',
          200: '#fddf8c',
          300: '#f7c948',
          400: '#edb51f',
          500: '#d4af37',
          600: '#b68b1d',
          700: '#8f6a14',
          800: '#6f4d10',
          900: '#4b360c',
        },
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(50% 50% at 50% 0%, rgba(212,175,55,0.25) 0%, rgba(0,0,0,0) 60%)',
      },
    },
  },
  plugins: [animate, typography],
}

