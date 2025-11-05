import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: ["devserver-preview--sonrisologos.netlify.app"],
  },
})
