import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 importante
  build: {
    rollupOptions: {
      external: [
        "@fontsource/inter",
        "@fontsource/inter/400.css",
        "@fontsource/inter/600.css",
        "@fontsource/inter/700.css"
      ]
    }
  }
})
