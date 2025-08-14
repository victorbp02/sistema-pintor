import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    target: 'es2015'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-icons']
  },
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 3000,
    host: true
  }
})
