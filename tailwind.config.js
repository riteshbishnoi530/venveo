/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-image': "url('/public/assets/image/hero-bg.webp')",
        'hero-image-small': "url('/public/assets/image/hero-bg-small.webp')"
      },
      fontSize:{
        'custom-9xl': '120px',
        'custom-xl': '22px',
        'custom-sm': '15px'
      },
      colors:{
        'off-white': '#FFFFFF99',
        'off-green': '#097980',
        'lime-green': '#D2F038',
        'platinum': '#D9D9D9'
      }
    },
  },
  plugins: [],
}