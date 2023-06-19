import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/app/App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
