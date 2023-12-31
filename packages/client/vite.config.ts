import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: [
      {
        find: '@api',
        replacement: resolve(__dirname, 'src', 'api'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src', 'components'),
      },
      {
        find: '@hooks',
        replacement: resolve(__dirname, 'src', 'hooks'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, 'src', 'pages'),
      },
      {
        find: '@store',
        replacement: resolve(__dirname, 'src', 'store'),
      },
      {
        find: '@utils',
        replacement: resolve(__dirname, 'src', 'utils'),
      },
    ],
  },
  plugins: [react()],
});
