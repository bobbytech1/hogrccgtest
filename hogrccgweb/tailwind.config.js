/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        headingFont: "Poppins, sans-serif",
        paragraphFont: "Montserrat, sans-serif",
        linkFont: "Josefin Sans, sans-serif"
      },
      colors:{
        hogblack: "#121926",
        hoghblue: "#697586",
        hogblue: "#0045B5"
      },
      screens :{
        'xssm': "380px",
        'xsm': "400px",
        'xssm': "480px",
        'xmd' : "800px",
        'lgx' : "920px"
      },
      animation: {
        slideDown: 'slideDown 0.7s ease-in-out',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}