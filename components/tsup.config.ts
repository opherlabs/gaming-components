import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/components/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    compilerOptions: {
      composite: false,
      incremental: false
    }
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react']
})