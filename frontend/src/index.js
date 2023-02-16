import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CVsContextProvider } from './context/CVContext'
import { IndexContextProvider } from './context/IndexContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CVsContextProvider>
      <IndexContextProvider>
        <App />
      </IndexContextProvider>
    </CVsContextProvider>
  </React.StrictMode>
);