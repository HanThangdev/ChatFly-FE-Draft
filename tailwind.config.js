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
      backgroundImage: {
        'btnStart': 'linear-gradient(182.6deg, #3291CB -24.75%, #3165E8 97.83%)',
        'bgLanding': 'radial-gradient(49.38% 45.34% at 50% 0%, rgba(0, 20, 61, 0.9) 0%, #010E1B 100%)',
        'works': 'linear-gradient(180deg, #000E1A 0%, #00143D 100%)',
        'frameoverlay': 'radial-gradient(50% 50% at 50% 50%, rgba(0, 14, 26, 0) 0%, rgba(0, 14, 26, 0.6) 100%)',
        'launchoverlay': 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),linear-gradient(1.65deg, rgba(246, 247, 249, 0.1) 1.4%, rgba(21, 23, 24, 0) 97.07%)',
        'featureovelay': 'linear-gradient(0.91deg, rgba(246, 247, 249, 0.1) 0.78%, rgba(21, 23, 24, 0) 172.83%)',
        'clientoverlay': 'linear-gradient(94.81deg, rgba(0, 14, 26, 0) 3.49%, #000E1A 103.98%)',
        'intergration': 'radial-gradient(175.59% 175.59% at 50% 177.32%, #39005B 0%, #000E1A 100%)',
        'contact': 'linear-gradient(178.11deg, #000E1A 1.6%, #042D36 98.46%)',
        'planoverlay': 'linear-gradient(1.65deg, rgba(246, 247, 249, 0.1) 1.4%, rgba(21, 23, 24, 0) 97.07%)'
      },
      boxShadow: {
        'inner-sx': '0px 1px 0px 0px #FFFFFF33 inset',
        'inner-sm': '0px 2px 0px 0px #FFFFFF33 inset'
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