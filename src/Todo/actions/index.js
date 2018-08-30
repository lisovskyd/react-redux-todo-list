import { setTodosToLocalStorage, getTodosFromLocalStorage } from '../helpers/';

export const tasksType = {
  LOAD_STORAGE_TO_STORE: 'LOAD_STORAGE_TO_STORE',
  ADD_COMMENT: 'ADD_COMMENT',
  CREATE_TASK: 'CREATE_TASK',
  CHANGE_VALUE: 'CHANGE_VALUE',  
  DELETE_TASK: 'DELETE_TASK',
  CHANGE_COMPLETE_VALUE: 'CHANGE_COMPLETE_VALUE'
};

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
  const uuid = require('uuid/v4');
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