import { select, put, takeLatest } from 'redux-saga/effects';

import { setTasksFromLocalStorageToStore } from '../../actions/';
import * as tasksType  from '../../variables/actionTypes';

export function* addToLocalStorage() {
  const getState = state => state;
  const store = yield select(getState);
  localStorage.setItem('Tasks', JSON.stringify(store));
}

export function* watchGetFromLocalStorage() {
  yield takeLatest(tasksType.GET_TASKS_FROM_LOCALSTORAGE, getFromLocalStorage);
}

function* getFromLocalStorage() {
  if(localStorage.getItem(`Tasks`) !== null) {
    const localStorageState = yield JSON.parse(localStorage.getItem(`Tasks`));
    yield put(setTasksFromLocalStorageToStore(localStorageState))
  }
}
