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
            DEFAULT:'#ffffff',
            100: '#eff0f6',
         },
         gray: {
            DEFAULT: '#6F6C90',
            100: '#cffafe',
            200: '#D9DBE9',
         },
         dark: {
            DEFAULT: '#170F49'
         },
         black: {
            DEFAULT: '#000'
         },
         primary: {
            DEFAULT: '#4A3AFF',
            100: '#F3F1FF',
            400: '#675ce2'
         },
         danger: {
            DEFAULT: '#ff3333'
         }
      },
      spacing: {
         0: '0px',
         1: '2px',
         2: '4px',
         3: '8px',
         3.5: '10px',
         4: '12px',
         5: '16px',
         5.5: '20px',
         6: '24px',
         6.5: '30px',
         7: '32px',
         8: '40px',
         9: '60px',
         10: '80px',
      },
      fontSize: {
         sm: '16px',
         base: '18px',
         xl: '24px',
         '2xl': '34px',
         '3xl': '50px',
      },
      extend: {},
   },
   plugins: [],
};
