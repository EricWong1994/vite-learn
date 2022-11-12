import { defineExportConfig } from 'vite-plugin-hot-export';
export default defineExportConfig({
	configs: [
		{
			targetDir: './src/assets/images',
		},
		{
			targetDir: './src/assets/img',
			depth: true,
			autoPrefix: true,
		},
		{
			targetDir: './src/assets/css',
			outputDir: './src/assets/css',
		},
		{
			targetDir: './src/assets/svgs',
			customImport: (fileName, file) => {
				return `import { ReactComponent as ${fileName} } from '${file}'`;
			},
		},
		{
			targetDir: './src/assets/gif',
			customImport: (fileName, file, fileType) => {
				return `import ${fileType}${fileName} from '${file}'`;
			},
			depth: true,
		},
	],
});
