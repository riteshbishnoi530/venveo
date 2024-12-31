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
        'client-card-3': "url('/public/assets/images/clients-card-3.webp')",
        'competitive-analysis': "url('/public/assets/images/competitive-analysis.webp')",
        'industry-expertise': "url('/public/assets/images/industry-expertise.webp')",
        'tab-one-card': "url('/public/assets/images/tab-one-sm-img.webp')",
        'actual-results': "url('/public/assets/images/actual-result-bg.webp')",
        'tab-two': "url('/public/assets/images/tab-2-bg.webp')",
        'tab-two-sm': "url('/public/assets/images/tab-two-sm-img.webp')",
        'tab-three': "url('/public/assets/images/radar-img.webp')",
        'tab-three-sm': "url('/public/assets/images/tab-three-sm-img.webp')",
        'card-one': "url('/public/assets/images/multi-channel-marketing.webp')",
        'card-two': "url('/public/assets/images/lead-gen.webp')",
        'card-three': "url('/public/assets/images/ecommerce.webp')",
        'goals': "url('/public/assets/images/goals-bg.webp')"

      },
      fontSize: {
        'custom-9xl': '120px',
        'custom-3xl': '80px',
        'custom-2xl': '40px',
        'custom-xl': '22px',
        'custom-sm': '15px',
        'custom-xs': '13px'
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