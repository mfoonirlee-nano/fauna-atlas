import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { speciesBundle } from './scripts/species-bundle.ts'

export default defineConfig({
  base: "./",
  build: {
    manifest: true,
    rolldownOptions: {
      output: {
        // The catalogue already carries every slug; keep lazy profile URLs short.
        chunkFileNames: (chunk) => chunk.facadeModuleId?.includes('virtual:species-profile/')
          ? 'assets/p-[hash].js' : 'assets/[name]-[hash].js',
        codeSplitting: {
          groups: [{ name: 'vendor', test: /node_modules/ }],
        },
      },
    },
  },
  plugins: [react(), speciesBundle()],
})
