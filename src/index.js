// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';  // ✔ usar HashRouter en GH Pages 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename="/">  {/* ← único router */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
reportWebVitals();
