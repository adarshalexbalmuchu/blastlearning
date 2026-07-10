import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Served from https://adarshalexbalmuchu.github.io/blastlearning/ (GitHub Pages project site) — asset URLs need this prefix in production, but the dev server should stay at root.
  base: command === 'build' ? '/blastlearning/' : '/',
  plugins: [react(),
  tailwindcss()
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://blast-mind-coach-c-dev-620b9754f1e1.herokuapp.com',
        changeOrigin: true,
        followRedirects: false,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
}))
