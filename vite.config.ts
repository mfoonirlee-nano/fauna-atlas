import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { speciesBundle } from './scripts/species-bundle.ts'

export default defineConfig({
  base: "./",
  build: {
    manifest: true,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [{ name: 'vendor', test: /node_modules/ }],
        },
      },
    },
  },
  plugins: [react(), speciesBundle()],
})
