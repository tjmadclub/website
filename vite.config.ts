import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mobileapps/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
