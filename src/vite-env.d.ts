/// <reference types="vite/client" />
declare module '~icons/*' {
	import type React from 'react';
	import type { SVGProps } from 'react';
	const component: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
	export default component;
}

// declare module '*.svg' {
// 	import * as React from 'react';
// 	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
// 	const src: string;
// 	export default src;
// }

// declare module '*.jpg' {
// 	const content: string;
// 	export default content;
// }

// declare module '*.png' {
// 	const content: string;
// 	export default content;
// }

// declare module '*.json' {
// 	const content: string;
// 	export default content;
// }
