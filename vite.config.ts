import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Inspect from 'vite-plugin-inspect';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
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
			],
			imports: ['react'],
			// dts: true, // or a custom path
			dts: './auto-imports.d.ts',
			eslintrc: {
				// enabled: false, //设置为ture
				enabled: true, //设置为ture
				filepath: './.eslintrc-auto-import.json',
				globalsPropValue: true,
			},
		}),
		Inspect(),
	],
	server: {
		open: true,
		port: 3000,
	},
});
