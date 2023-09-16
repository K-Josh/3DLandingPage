/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
      secondary: ["Poppins", "serif"],
      tertiary: ["inter", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary:'#df7e85',
        secondary: '#8468F5',
        tertiary: '#F8C7C8',
      },
      backgroundImage: {
        site: "url('./assets/Strip-Patterns.png')",
      },
    },
  },
  plugins: [],
}

