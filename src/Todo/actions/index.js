import { setTodosToLocalStorage, getTodosFromLocalStorage } from '../helpers/';
import * as tasksType  from '../constants/actionTypes';
import uuid from 'uuid';

export const onDragEnd = (result) => (dispatch, getState) => {

  if (!result.destination) {
      return;
    }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };  
  const items = reorder(
    getState().todos,
    result.source.index,
    result.destination.index    
  );  
  return dispatch({
    type: tasksType.ON_DRAG_END,
    updatedTodos: items
  })
}

export const saveStateToStorage = () => {
  return ({
    type: tasksType.LOAD_STORAGE_TO_STORE,
    payload: getTodosFromLocalStorage('Tasks')    
  })
};

export const getComments = () => (dispatch, getState) => {
  fetch(`https://jsonplaceholder.typicode.com/comments/1`)
  .then(response => {
    const data = response.json();
    return data
  }) 
  .then(data => 
    dispatch({
      type: tasksType.ADD_COMMENT,
      payload: data
    })
  )
};

export const createTask = () => (dispatch, getState) => {
  const { inputValue } = getState();  
  if (!inputValue) return;
  dispatch({
    type: tasksType.CREATE_TASK,    
    id: uuid(),
    done: false,
    complited: 'todo'      
  })
  setTodosToLocalStorage('Tasks', getState());
};

export const changeValue = (inputValue) => {
  return {
    type: tasksType.CHANGE_VALUE,
    inputValue
  }
};

export const deleteTask = (todosId) => (dispatch, getState) => {
  dispatch ({
    type: tasksType.DELETE_TASK,
    id: todosId
  })
  setTodosToLocalStorage('Tasks', getState());
};

export const changeCompleteValue = (todosId, event) => (dispatch, getState) => {
  const target = event.target;
  dispatch ({
    type: tasksType.CHANGE_COMPLETE_VALUE,
    id: todosId,
    value: target.value
  });
  setTodosToLocalStorage('Tasks', getState());
};