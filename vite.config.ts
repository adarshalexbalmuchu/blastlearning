import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      png:  { quality: 80 },
      jpeg: { quality: 80 },
      jpg:  { quality: 80 },
      webp: { quality: 82 },
    }),
  ],
  base: command === 'build' ? '/blastlearning/' : '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes('framer-motion')) return 'vendor-motion';
          if (id.includes('lucide-react')) return 'vendor-icons';
          if (id.includes('react-dom') || id.includes('react-router') || id.includes('node_modules/react/')) return 'vendor-react';
        },
      },
    },
  },
}))
