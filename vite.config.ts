import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/roblox': {
        target: 'https://games.roblox.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/roblox/, '')
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
