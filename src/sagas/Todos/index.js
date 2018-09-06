import { put, takeLatest, select } from 'redux-saga/effects';

import { setTodosToLocalStorage } from '../../helpers/';
import { createTask } from '../../actions/';
import * as tasksType  from '../../variables/actionTypes';
import { addToLocalStorage } from '../LocalStorage/'

export function* watchAddTask() {
  yield takeLatest(tasksType.REQUEST_CREATE_TASK, addTaskSagas);
  yield takeLatest(tasksType.REQUEST_CREATE_TASK, addToLocalStorage);
}

function* addTaskSagas() {
  const getState = state => state;
  const store = yield select(getState)
  if (!store.inputValue) return;
  yield put(createTask())
  yield setTodosToLocalStorage('Tasks', getState());
}

export function* watchDeleteTask() {
  yield takeLatest(tasksType.DELETE_TASK, addToLocalStorage);
}

export function* watchtChangeCompleteValue() {
  yield takeLatest(tasksType.CHANGE_COMPLETE_VALUE, addToLocalStorage)
}

// export function* watchDragAndDropTasks() {
//   const getState = state => state;
//   const store = yield select(getState);

//   const initTodosState = store().todos.map((todo) => {
//     if(result.draggableId === todo.id) {
//       todo.taskStatus = result.destination.droppableId;
//     }
//     return todo;
//   })
// }

// export const onDragEnd = (result) => (dispatch, getState) => {

//   const reorder = (list, startIndex, endIndex) => {
//     const result = [ ...list];
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);
//     return result;
//   };

//   const initTodosState = getState().todos.map((todo) => {
//     if(result.draggableId === todo.id) {
//       todo.taskStatus = result.destination.droppableId;
//     }
//     return todo;
//   })
  
//   const todos = reorder(
//     initTodosState,
//     result.source.index,
//     result.destination.index    
//   );  

//   dispatch({
//     type: tasksType.ON_DRAG_END,
//     updatedTodos: todos
//   })

//   setTodosToLocalStorage('Tasks', getState());
// }