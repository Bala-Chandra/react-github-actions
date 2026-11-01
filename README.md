# React + Vite

# For Vitest Setup:

`npm install -D vitest jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event`


# Configure Vite & Setup File:

You can add the test configuration directly into your existing vite.config.ts (or vite.config.js). If you don't have one, create it at the root.

# typescript
#  vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allows using describe/it/expect without imports
    environment: 'jsdom', // Simulates the browser DOM
    setupFiles: './src/setupTests.ts', // Path to your setup file
  },
})

# package.json:

json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "coverage": "vitest run --coverage"
  }
}



#  src/setupTests.ts
import '@testing-library/jest-dom/vitest';