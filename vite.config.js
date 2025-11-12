import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuración Vite para despliegue en Vercel
export default defineConfig({
  plugins: [react()],
  base: "/", // Asegura rutas absolutas correctas
  build: {
    outDir: "dist", // donde Vite deja los archivos compilados
    emptyOutDir: true, // limpia la carpeta antes de cada build
    rollupOptions: {
      input: "index.html",
    },
  },
});
