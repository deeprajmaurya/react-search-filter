import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';

import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Nunito:300,400,700', 'sans-serif']
  }
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
