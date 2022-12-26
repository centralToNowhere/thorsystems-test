import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const path = require('path')

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3001,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    manifest: true,
  },
  envPrefix: 'THOR',
  plugins: [tsconfigPaths(), react()],
})
