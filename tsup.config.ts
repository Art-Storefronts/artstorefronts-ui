import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  dts: true,
  clean: true,
  sourcemap: true,
  format: ['esm'],
  target: 'esnext',
  minify: true,
});
