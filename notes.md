[vite] Internal server error: Cannot find module '@svgr/core'

## plugins
### @vitejs/plugin-react
支持react语法
### unplugin-icons/vite
一个icon插件，用法如下
```jsx
import IconAccessibility from '~icons/carbon/accessibility';
import IconAccountBox from '~icons/mdi/account-box';
function IconDemo() {
	return (
		<>
			<IconAccessibility />
			<IconAccountBox style={{ fontSize: '2em', color: 'red' }} />
		</>
	);
}
export default IconDemo;
```
### unplugin-auto-import/vite
自动导入插件
### vite-plugin-inspect
vite启动插件，结合vscode vite插件实现自启动项目，并打开，支持在vscode内打开页面
### vite-plugin-react-inspector
从浏览器跳转IDE
不好用