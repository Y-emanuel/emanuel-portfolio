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
        // ✅ NUEVO COLOR: Texto más oscuro, pero aún elegante
        text: '#E5E7EB', // Gris claro (ahora es tu color base de texto)
        textDark: '#D1D5DB', // Gris medio (para textos secundarios o traducidos)
      },
    },
  },
  plugins: [],
}