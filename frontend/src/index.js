import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CVsContextProvider } from './context/CVContext'
import { IndexContextProvider } from './context/IndexContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CVsContextProvider>
        <IndexContextProvider>
          <App />
        </IndexContextProvider>
      </CVsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);