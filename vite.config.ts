import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/new-page/',
  build: {
    outDir: './docs',
  },
})