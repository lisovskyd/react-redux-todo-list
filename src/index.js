import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import './Todo/components/Css/App.css';

import App from './Todo/components/App/';
import TodoListReducer from './reducers/';
import rootSaga from './sagas/';

const sagaMiddleware  = createSagaMiddleware()

const store = createStore(
  TodoListReducer, 
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
  document.getElementById('root')
);