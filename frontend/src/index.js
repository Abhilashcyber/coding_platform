import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './screens/Auth/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));

let auth = false;

root.render(
  auth ? 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  :
  <Auth />
);