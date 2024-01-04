import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			components: '/src/components',
			pages: '/src/pages',
			slices: '/src/store/slices',
			utils: '/src/utils',
			views: '/src/views',
			images: '/src/assets/img',
			interfaces: '/src/interfaces',
			types: '/src/types',
			hooks: '/src/hooks'
		}
	}
})
