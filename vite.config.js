import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  server: {
    watch: {
      // Exclude locked binary assets from Vite's file-system watcher.
      // This prevents EBUSY crashes when the file is held open by another process.
      ignored: ['**/src/assets/**/*.jpg', '**/src/assets/**/*.png', '**/src/assets/**/*.webp'],
    },
  },
})
