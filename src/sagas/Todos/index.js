import { put, takeLatest, select } from 'redux-saga/effects';
import uuid from 'uuid';

import { createTask, onDragEnd, deleteTask, changeCompleteValue } from '../../actions/';
import * as tasksType  from '../../variables/actionTypes';
import { todoAuthToken } from '../../variables/common';

//delete todo functionality
export function* watchDeleteTask() {
  yield takeLatest(tasksType.REQUEST_DELETE_TASK, deleteTaskSaga);
}

function* deleteTaskSaga({ payload }) {
  try {
  const authToken = yield JSON.parse(localStorage.getItem(todoAuthToken));
  const dataBody = {
    todoId: payload.todoId
  }
  const getTodosRequest = yield fetch('http://localhost:3001/delete', {
    method: "POST",      
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${authToken}`
    },
    body: JSON.stringify(dataBody)
  })
  const answer = yield getTodosRequest.json();
  yield put(deleteTask(answer.todoId));  
  } catch (err) {
    console.log('Error:', err)
  }
}

//change Complete value on drop-down menu functionality
export function* watchtChangeCompleteValue() {
  yield takeLatest(tasksType.REQUEST_CHANGE_COMPLETE_VALUE, changeCompleteValueinDb);
}

export function* changeCompleteValueinDb({ payload }) {
  try {
    const authToken = yield JSON.parse(localStorage.getItem(todoAuthToken));
    const dataBody = {
      todoId: payload.todoId,
      value: payload.event.target.value
    }
    const changeCompleteValueRequest = yield fetch('http://localhost:3001/change-complete-value', {
      method: "POST",      
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${authToken}`
      },
      body: JSON.stringify(dataBody)
    })
    const answer = yield changeCompleteValueRequest.json();
    yield put(changeCompleteValue(answer.todoId, answer.value));  
  } catch (err) {
    console.log('Error:', err)
  }
}

export function* watchDragAndDropTasks() {
  yield takeLatest(tasksType.WATCH_FOR_DRAG_END, dragAndDropTasks);
  // yield takeLatest(tasksType.WATCH_FOR_DRAG_END, dragTodoHorizontal);
}

//change complete value on drag functionality
export function* dragAndDropTasks({ payload }) {
  if (!payload.destination) {
    return;
  }
  const authToken = yield JSON.parse(localStorage.getItem(todoAuthToken));
  const dataBody = {
    todoId: payload.draggableId,
    value: payload.destination.droppableId
  }

  const dndChangeCompleteValue = yield fetch('http://localhost:3001/dnd-change-complete-value', {
    method: "POST",      
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${authToken}`
    },
    body: JSON.stringify(dataBody)
  })
  const todosArr = yield dndChangeCompleteValue.json();
  console.log(todosArr)
  yield put(onDragEnd(todosArr.userTodosArr))
}


// // horizontal drag functionality
// export function* dragTodoHorizontal({ payload }) {
//   if (!payload.destination) {
//     return;
//   }
//   const getState = state => state.todoListReducer.todos;
//   const store = yield select(getState);

//   const reorder = (list, startIndex, endIndex) => {
//     const result = [ ...list];
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);
//     return result;
//   };
  
//   const todos = reorder(
//     store,
//     payload.source.index,
//     payload.destination.index    
//   );

//   yield put(onDragEnd(todos))
// }

// create todo functionality
export function* watchAddTask() {
  yield takeLatest(tasksType.REQUEST_CREATE_TASK, addTaskToDataBase);
}

export function* addTaskToDataBase() {  
  try {
    const getState = state => state.todoListReducer;
    const store = yield select(getState);
    const dataBody = {
      id: uuid(),
      taskStatus: 'todo',
      value: store.inputValue
    }
    const authToken = yield JSON.parse(localStorage.getItem(todoAuthToken));
    const addTaskRequest = yield fetch('http://localhost:3001/todos', {
      method: "POST",      
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${authToken}`
      },
      body: JSON.stringify(dataBody)
    })
    const todo = yield addTaskRequest.json();
    yield put(createTask(todo.id, todo.value, todo.status))
  } catch(err) {
    console.log(err)
  }
}