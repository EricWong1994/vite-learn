import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';

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
		Icons({ compiler: 'jsx', jsx: 'react' }),
	],
	server: {
		open: true,
	},
});
