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
        'blue': '#3169E6',
        'bgDark': '#000E1A',
        'blue-dark': '#011230',
        'white-80': 'var(--white-80, #D1D2D5)',
        'gray-255': 'rgba(255, 255, 255, 0.20)',
        'blue-primary': 'var(--Primary-Blue, #3169E6);',
        'black': 'var(--Black, #000E1A)',
        'blue-246': 'rgba(246, 247, 249, 0.10)',
      },
    },
    fontFamily: {
      'helve': ['Helvetica Neue', 'sans-serif'],
      'dm': ['DM Sans', 'sans-serif']
    },
    backgroundImage: {
      'radial-gradient': 'radial-gradient(175.59% 175.59% at 50% 177.32%, #39005B 0%, #000E1A 100%);',
      'button-plan': 'var(--Primary-Gradient, linear-gradient(183deg, #3291CB -24.75%, #3165E8 97.83%))'
    },
  },
  plugins: [],
}