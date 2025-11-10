// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0F0C1A',
        darker: '#0A0715',
        primary: '#6E44FF',
        secondary: '#9D4EDD',
        accent: '#B86EFF',
        text: '#E5E7EB', 
        textDark: '#D1D5DB', 
      },
    },
  },
  plugins: [],
}