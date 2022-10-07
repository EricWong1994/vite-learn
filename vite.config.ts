import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// react(),
		react({
			// Exclude storybook stories
			exclude: /\.stories\.(t|j)sx?$/,
			// Only .tsx files
			include: '**/*.tsx',
			// include: '**/**/**/*.tsx', // 不需要
		}),
	],
	server: {
		open: true,
	},
});
