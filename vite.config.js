import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  base: '/Practice-FoodMenu-WithCss-React/' // Set the correct subdirectory name

})
