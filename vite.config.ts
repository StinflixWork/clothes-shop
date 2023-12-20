import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			components: '/src/components',
			pages: '/src/pages',
			slices: '/src/store/slices',
			utils: '/src/utils',
			views: '/src/views'
		}
	}
})