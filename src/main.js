import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import MainApp from './containers/app';
import configureStore from './store/configureStore';

const store = configureStore({});
const appEl = document.getElementById('app');

ReactDom.render(
  <Provider store={store}>
    <MainApp />
  </Provider>, appEl);
