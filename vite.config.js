// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/SKPortfolio/', // repo name with trailing slash
  plugins: [react()],
})
