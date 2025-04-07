import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // 👈 IMPORTANT: Hosting at the root because it's a personal site
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],  // 👌 Keep your original optimization config
  },
});
