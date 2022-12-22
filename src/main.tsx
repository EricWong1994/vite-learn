import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom';
import { StillnessProvider } from 'react-stillness-component';
import App from './App';
import './index.css';
const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<StillnessProvider>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</StillnessProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
