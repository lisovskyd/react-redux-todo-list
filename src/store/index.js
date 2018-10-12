import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';

import todoListReducer from '../reducers/';
import rootSaga from '../sagas/';

const sagaMiddleware  = createSagaMiddleware();
const reducers = combineReducers({
  todoListReducer,
  form: formReducer
});

export const store = createStore(
  reducers, 
  composeWithDevTools(applyMiddleware(
    sagaMiddleware
  ))
);

sagaMiddleware.run(rootSaga);