/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}" ],

  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(40px, 8vw, 70px)",
        navClamp: "clamp(16px,4vw,20px)",
        subClamp: "clamp(26px,5vw,32px)",
        textClamp: "clamp(10px,5vw,14px)",
        family: "'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace"
      },
      gridTemplateColumns: {
        cardGrid: "repeat(auto-fill, minmax(300px, 1fr))",
        mediaGrid: "repeat(auto-fill, minmax(250px, 1fr))"
      },
      screens: {
        'mobile': { 'min': '320px', 'max': '480px' },
        // => @media (min-width: 320px and max-width: 480px) { ... }

        'tablet': { 'min': '481px', 'max': '768px' },
        // => @media (min-width: 481px and max-width: 768px) { ... }

        'laptop': { 'min': '769px', 'max': '1024px' },
        // => @media (min-width: 769px and max-width: 1024px) { ... }

        'desktop': { 'min': '1025px', 'max': '1200px' },
        // => @media (min-width: 1025px and max-width: 1200px) { ... }

        'tv': { 'min': '1201px' },
        // => @media (min-width: 1201px) { ... }
      }
    },
  },
  plugins: [],
}

