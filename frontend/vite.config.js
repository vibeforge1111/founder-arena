import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: '../static',
    emptyOutDir: false,
  },
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:8888',
      '/static': 'http://localhost:8888',
    },
  },
});
