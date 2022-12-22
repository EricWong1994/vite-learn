import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { todoAPI } from '../../apis/todo';

function Todos() {
	// 访问 client
	const queryClient = useQueryClient();

	// 查询
	// const query = useQuery(['todos'], getTodos);
	const query = useQuery(['todos'], todoAPI.get);

	// 修改
	const mutation = useMutation(postTodo, {
		onSuccess: () => {
			// 错误处理和刷新
			queryClient.invalidateQueries(['todos']);
		},
	});

	return (
		<div>
			<ul>
				{query.data.map(todo => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>

			<button
				onClick={() => {
					mutation.mutate({
						id: Date.now(),
						title: 'Do Laundry',
					});
				}}
			>
				Add Todo
			</button>
		</div>
	);
}
