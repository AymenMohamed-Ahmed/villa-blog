/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          100: '#FDFBF7',
          200: '#F9F6F0',
        },
        charcoal: {
          700: '#4a4a4a',
          800: '#333333',
          900: '#1a1a1a',
        },
        gold: {
          light: '#EAE0C8',
          dark: '#A38C5C',
          DEFAULT: '#C5A970',          
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        minzah: {
          "primary": "#C5A970",
          "secondary": "#A38C5C",
          "accent": "#EAE0C8",
          "neutral": "#333333",
          "base-100": "#FDFBF7",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
};
