import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx', '!src/stores/**'],
  dts: {
    resolve: true,
  },
  clean: true,
  sourcemap: true,
  format: ['esm'],
  target: 'esnext',
  minify: true,
});
