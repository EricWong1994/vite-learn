import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom';
import { StillnessProvider } from 'react-stillness-component';
import App from './App';
import FixedSizeListDemo from './demos/reactwindow/MiniWindow/FixedSizeListDemo';
import './index.css';
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <StillnessProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        {/* <FixedSizeListDemo /> */}
      </QueryClientProvider>
    </StillnessProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
