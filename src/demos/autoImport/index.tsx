function Counter() {
	// unplugin-auto-import配置完成后出现红色语法警告(DONE: tsconfig.json include里添加"./auto-imports.d.ts")
	const [count, setCount] = useState(0);
	return (
		<div>
			测试文字
			<div>{count}</div>
		</div>
	);
}

export default Counter;
