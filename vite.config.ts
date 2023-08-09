import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: ['./src/main.ts', './src/styles.css'],
      name: 'web-alert',
    },
    rollupOptions: {
      output: {
        compact: false,
      },
    },
  },
});