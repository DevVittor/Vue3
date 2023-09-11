import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),VueRouter()],
})
