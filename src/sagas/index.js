import { all } from 'redux-saga/effects';

import watchLoadComments from './Comments/';
import { watchAddTask, watchDeleteTask, watchtChangeCompleteValue } from './Todos/';
import { watchGetFromLocalStorage } from './LocalStorage/'


export default function* rootSaga() {
  yield all([
    watchLoadComments(),
    watchAddTask(),
    watchGetFromLocalStorage(),
    watchDeleteTask(),
    watchtChangeCompleteValue()
  ])
};