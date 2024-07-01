import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import Home from './Components/home';
import Setup from './Components/playersetup';
import Easy from './Components/easy';
import Medium from './Components/medium';
import Hard from './Components/hard';
import Winner from './Components/winner';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/setup',
    element: <Setup />,

  },
  {
    path: '/winner',
    element: <Winner />,
  },
  {
    path: '/easy',
    element: <Easy />,
  },
  {
    path: '/medium',
    element: <Medium />,
  },
  {
    path: '/hard',
    element: <Hard />,
  }
])

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
