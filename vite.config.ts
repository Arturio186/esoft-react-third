import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#interfaces': '/src/interfaces',
      '#components': '/src/components',
      '#api': '/src/api'
    }
  }
})
