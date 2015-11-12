import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/app';

let appEl = document.getElementById('app');
ReactDom.render(<App />, appEl);
