import { setTodosToLocalStorage, getTodosFromLocalStorage } from '../helpers/';
import * as tasksType  from '../constants/actionTypes';
import uuid from 'uuid'

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
    done: false      
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

export const changeCompleteValue = (todosId) => (dispatch, getState) => {
  dispatch ({
    type: tasksType.CHANGE_COMPLETE_VALUE,
    id: todosId
  });
  setTodosToLocalStorage('Tasks', getState());
};