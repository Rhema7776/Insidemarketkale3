/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {},
    screens: {
      xs: '320px',
      // => @media (min-width: 320px) {}
      sm: '640px',
      // => @media (min-width: 640px) {...}
      md: '768px',
      // => @media (min-width: 760px) {...}
      lg: '1024px',
      // => @media (min-width: 1240px) {...}
      xl: '1280px',
      // => @media (min-width: 1280px) {...}
      '2xl': '1536px',
      // => @media (min-width: 1536px) {...}
      '3xl': '2800px',
      // => @media (min-width: 2800px) {...}
    },
    
  },
  plugins: [
    require('tailwind-scrollbar'),
    require("tailwindcss-animate"),
    require('flowbite/plugin')
  ],
};


