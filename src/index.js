import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Start from './start.js';
import Logo from './logo.js';
import Subs from './subs.js';

ReactDOM.render(
  <React.StrictMode>
   <Logo />
   <Start />
   <Subs />
  </React.StrictMode>,
  document.getElementById('root')
);

