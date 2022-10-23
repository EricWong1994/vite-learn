export default function Counter() {
	// TODO: unplugin-auto-import配置完成后出现红色语法警告
	const [count, setCount] = useState(0);
	return <div>{count}</div>;
}
