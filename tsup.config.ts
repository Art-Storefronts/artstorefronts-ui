import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx', '!src/stores/**'],
  dts: true,
  clean: true,
  sourcemap: true,
  format: ['esm'],
  target: 'esnext',
  minify: true,
  external: [
    'react',
    'react-dom',
    'framer-motion',
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});