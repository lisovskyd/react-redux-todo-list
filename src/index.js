import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import './Todo/components/Css/App.css';

import App from './Todo/components/App/';
import TodoListReducer from './Todo/reducers/';
import commentsRequest from './Todo/saga/';

const sagaMiddleware  = createSagaMiddleware()

const store = createStore(
  TodoListReducer, 
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

// sagaMiddleware.run(commentsRequest)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
  document.getElementById('root')
);