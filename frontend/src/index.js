import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserStore } from './contexts/userStore';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserStore>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserStore>
  </React.StrictMode>
);

