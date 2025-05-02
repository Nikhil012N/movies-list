import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@api': '/src/api',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@styles': '/src/styles'
    }
  }
})
