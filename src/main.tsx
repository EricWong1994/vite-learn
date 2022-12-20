import React from 'react';
import ReactDOM from 'react-dom';
import { StillnessProvider } from 'react-stillness-component';
import App from './App';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<StillnessProvider>
			<App />
		</StillnessProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
