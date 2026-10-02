import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/portfolio.css';
import '../script.js';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
