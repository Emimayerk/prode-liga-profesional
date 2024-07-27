import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import resolve from 'vite-plugin-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    resolve({
      scss: '.scss',
    }),
  ],
});
