import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // This is the new way to use Tailwind v4
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['react-dropzone', 'axios'],
          'icon-vendor': ['react-icons']
        }
      }
    },
    target: 'es2015',
    minify: 'esbuild', // Using esbuild is faster and less problematic
  },
})