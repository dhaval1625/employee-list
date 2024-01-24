/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      fontFamily: {
         sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
         white: '#ffffff',
         gray: {
            100: '#cffafe',
         },
      },
      spacing: {
         1: '8px',
         2: '12px',
         3: '16px',
         4: '24px',
         5: '32px',
         6: '48px',
      },
      extend: {},
   },
   plugins: [],
};
