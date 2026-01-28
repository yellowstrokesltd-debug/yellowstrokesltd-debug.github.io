import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  base: '/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://yellowstroke.com',
      dynamicRoutes: [
        '/about',
        '/better-human-beings',
        '/contact',
        '/terms',
        '/privacy'
      ]
    }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
