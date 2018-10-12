import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './Todo/components/Css/App.css';

import Main from './Todo/components/Main/';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
      <Main />
  </Provider>, 
  document.getElementById('root')
);