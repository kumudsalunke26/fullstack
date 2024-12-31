import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { ViteSSG } from 'vite-plugin-ssg';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  ],
})
