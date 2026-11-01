import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   test: {
    globals: true, // Allows using describe/it/expect without imports
    environment: 'jsdom', // Simulates the browser DOM
    setupFiles: './src/setupTests.js', // Path to your setup file
  },
})
