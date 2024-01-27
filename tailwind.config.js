/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      fontFamily: {
         sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         white: {
            DEFAULT: '#ffffff',
            100: '#eff0f6',
         },
         gray: {
            DEFAULT: '#6F6C90',
            100: '#cffafe',
            200: '#D9DBE9',
         },
         dark: {
            DEFAULT: '#170F49',
         },
         black: {
            DEFAULT: '#000',
         },
         primary: {
            DEFAULT: '#4A3AFF',
            100: '#F3F1FF',
            400: '#675ce2',
         },
         danger: {
            DEFAULT: '#ff3333',
         },
      },
      spacing: {
         0: '0px',
         1: '0.125rem',
         2: '0.25rem',
         3: '0.5rem',
         3.5: '0.625rem',
         4: '0.75rem',
         5: '1rem',
         5.5: '1.25rem',
         6: '1.5rem',
         6.5: '1.875rem',
         7: '2rem',
         8: '2.5rem',
         9: '3.75rem',
         10: '5rem',
         11: '6.25rem',
      },
      fontSize: {
         sm: '1rem', 
         base: '1.125rem', 
         xl: '1.5rem', 
         '2xl': '2.125rem', 
         '3xl': '3.125rem',
      },
      extend: {},
   },
   plugins: [],
};
