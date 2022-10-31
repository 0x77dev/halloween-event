import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'chrome99',
  },
  server: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:1447',
        ws: true
      }
    }
  }
})
