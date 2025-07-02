
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { startMockApi } from './services/mockApi';

// Start the mock API server before rendering the app.
// This will intercept all fetch calls made by the application.
startMockApi();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);