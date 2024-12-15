/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#026a52',
        'header-bg-color': '#f8f9fa',
        'body-bg-color': '#ffffff',
        'danger-color': '#F56C6C',
      },

      backgroundImage: (theme) => ({
        'hero-pattern': "url('/background.png')",
      }),

      fontFamily: {
        sans: ['Monstretta', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
