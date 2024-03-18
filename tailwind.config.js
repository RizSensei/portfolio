/** @type {import('tailwindcss').Config} */

const { fontFamily, colors } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        circularLight : 'repeating-radial-gradient(#fff 2px, #000 5px, #000 100px)'
      },
      fontFamily: {
        rubik : ['var(--font-rubik)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        darkPurple: "#7e22ce" 
    },
    keyframes: {
      liquid: {
        '0%, 100%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' },
        '14%': { borderRadius: '40% 60% 54% 46% / 49% 60% 40% 51%' },
        '28%': { borderRadius: '54% 46% 38% 62% / 49% 70% 30% 51%' },
        '42%': { borderRadius: '61% 39% 55% 45% / 61% 38% 62% 39%' },
        '56%': { borderRadius: '61% 39% 67% 33% / 70% 50% 50% 30%' },
        '70%': { borderRadius: '50% 50% 34% 66% / 56% 68% 32% 44%' },
        '84%': { borderRadius: '46% 54% 50% 50% / 35% 61% 39% 65%' },
      }
    },
    animation: {
      'moving-liquid' : 'liquid 5s linear infinite alternate'
    }
    },
  },
  plugins: [],
}
