import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [
    react({
      // Disable fast-refresh and type-checking in production
      babel: {
        plugins: isProduction ? [] : [],
      },
      jsxRuntime: 'automatic',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  },
  esbuild: {
    // This prevents esbuild from throwing type errors in production
    tsconfigRaw: isProduction
      ? {
          compilerOptions: {
            strict: false,
            skipLibCheck: true
          }
        }
      : undefined
  }
})
