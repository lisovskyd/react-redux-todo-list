import { put, takeLatest, select } from 'redux-saga/effects';

import { setTodosToLocalStorage } from '../../helpers/';
import { createTask, onDragEnd } from '../../actions/';
import * as tasksType  from '../../variables/actionTypes';
import { addToLocalStorage } from '../LocalStorage/';

export function* watchAddTask() {
  yield takeLatest(tasksType.REQUEST_CREATE_TASK, addTaskSagas);
  yield takeLatest(tasksType.REQUEST_CREATE_TASK, addToLocalStorage);
}

function* addTaskSagas() {
  const getState = state => state;
  const store = yield select(getState);
  if (!store.inputValue) return;
  yield put(createTask())
  yield setTodosToLocalStorage('Tasks', store);
}

export function* watchDeleteTask() {
  yield takeLatest(tasksType.DELETE_TASK, addToLocalStorage);
}

export function* watchtChangeCompleteValue() {
  yield takeLatest(tasksType.CHANGE_COMPLETE_VALUE, addToLocalStorage);
}

export function* watchDragAndDropTasks() {
  yield takeLatest(tasksType.WATCH_FOR_DRAG_END, dragAndDropTasks);
  yield takeLatest(tasksType.WATCH_FOR_DRAG_END, addToLocalStorage);
}

export function* dragAndDropTasks({payload}) {
  if (!payload.destination) {
    return;
  }
  const getState = state => state.todos;
  const store = yield select(getState);

  const reorder = (list, startIndex, endIndex) => {
    const result = [ ...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const initTodosState = store.map((todo) => {
    if(payload.draggableId === todo.id) {
      todo.taskStatus = payload.destination.droppableId;
    }
    return todo;
  })
  
  const todos = reorder(
    initTodosState,
    payload.source.index,
    payload.destination.index    
  );

  yield put(onDragEnd(todos))
}