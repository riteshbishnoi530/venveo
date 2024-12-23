/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image-small': "url('/public/assets/images/hero-bg-small.webp')",
        'client-card-1': "url('/public/assets/images/clients-card-1.webp')",
        'client-card-2': "url('/public/assets/images/clients-card-2.webp')",
        'client-card-3': "url('/public/assets/images/clients-card-3.webp')"
      },
      fontSize: {
        'custom-9xl': '120px',
        'custom-xl': '22px',
        'custom-sm': '15px'
      },
      colors: {
        'off-white': '#FFFFFF99',
        'off-green': '#097980',
        'lime-green': '#D2F038',
        'off-lime-green': '#94CB4E',
        'platinum': '#D9D9D9'
      }
    },
  },
  plugins: [],
}