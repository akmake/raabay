import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      // ה-API שלנו (Express) רץ על פורט 3001 — ראה server/.env
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        // The Express server enforces a CORS allow-list. Drop the Origin header
        // so proxied dev requests are treated as same-origin (which it allows),
        // regardless of which port Vite ends up on.
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => proxyReq.removeHeader('origin'));
        },
      },
    },
  },
});
