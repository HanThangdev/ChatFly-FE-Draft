/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgBlack': '#050505',
        'customPurple': '#7D53F3',
      },
      backgroundImage: {
        'btnStart': 'linear-gradient(182.6deg, #3291CB -24.75%, #3165E8 97.83%)',
        'bgLanding': 'radial-gradient(49.38% 45.34% at 50% 0%, rgba(0, 20, 61, 0.9) 0%, #010E1B 100%)',
      },
      boxShadow: {
        'inner-sx': '0px 1px 0px 0px #FFFFFF33 inset',
        'inner-sm': '0px 2px 0px 0px #FFFFFF33 inset'
      },
    },
    fontFamily: {
      'helve': ['Helvetica Neue', 'sans-serif'],
      'dm': ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}