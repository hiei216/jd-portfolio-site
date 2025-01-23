/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#155e95',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      fontSize: {
        'header-clamp': 'clamp(1rem, 5vw, 2rem)',
        clamp: 'clamp(0.8rem, 3vw, 1.5rem)',
      },
      backgroundImage: {
        'horizontal-background': "url('./assets/horizont-landing-page.jpg')",
      },
    },
  },
  plugins: [],
};
