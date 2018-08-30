import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './Todo/components/Css/App.css';

import App from './Todo/components/App/';
import TodoListReducer from './Todo/reducers/';

const store = createStore(TodoListReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
      <App storeObj={store}/>
  </Provider>, 
  document.getElementById('root')
);