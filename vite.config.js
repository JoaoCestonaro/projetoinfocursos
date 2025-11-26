import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isVercel = Boolean(process.env.VERCEL)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isVercel ? '/' : '/InfoCursos-ProjetoIHC/',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
  },
})
