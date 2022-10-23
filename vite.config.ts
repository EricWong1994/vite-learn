import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';
import AutoImport from 'unplugin-auto-import/vite';

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
		AutoImport({
			// targets to transform
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.md$/, // .md
			],
			imports: ['react'],
			dts: true, // or a custom path
		}),
	],
	server: {
		open: true,
	},
});
