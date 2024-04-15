/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}"],
  
  theme: {
    extend: {},

    screens: {
      'mobile': {'min': '320px', 'max': '480px'},
      // => @media (min-width: 320px and max-width: 480px) { ... }

      'tablet': {'min': '481px', 'max': '768px'},
      // => @media (min-width: 481px and max-width: 768px) { ... }

      'laptop': {'min': '769px', 'max': '1024px'},
      // => @media (min-width: 769px and max-width: 1024px) { ... }

      'desktop': {'min': '1025px', 'max': '1200px'},
      // => @media (min-width: 1025px and max-width: 1200px) { ... }

      'tv': {'min': '1201px'},
      // => @media (min-width: 1201px) { ... }
    }
  },
  plugins: [],
}

