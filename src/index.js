import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';

import './Todo/components/Css/App.css';

import App from './Todo/components/App/';
import todoListReducer from './reducers/';
import rootSaga from './sagas/';

const sagaMiddleware  = createSagaMiddleware();
const reducers = combineReducers({
  todoListReducer,
  form: formReducer
});

const store = createStore(
  reducers, 
  composeWithDevTools(applyMiddleware(
    sagaMiddleware
  ))
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
  document.getElementById('root')
);