import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@fortawesome/fontawesome-svg-core', '@fortawesome/react-fontawesome'],
  },
  ssr: {
    noExternal: ['@fortawesome/fontawesome-svg-core', '@fortawesome/react-fontawesome'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://cleanuri.com',
        changeOrigin: true,
      },
    },
  },
});
