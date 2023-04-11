/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#7d18f7',
        gray: '#685f71',
        yellow: '#fdcd21',
        darkPurple: '#10031f',
        offWhite: '#f9f9f9',
      },
      fontSize: {
        xs: '14px',
        sm: '20px',
        md: '26px',
        lg: '32px',
        xl: '38px',
        xxl: "44px",
      }
    },
  },
  plugins: [],
}

