import { setTodosToLocalStorage, getTodosFromLocalStorage } from '../helpers/';
import * as tasksType  from '../constants/actionTypes';
import uuid from 'uuid';

export const onDragEnd = (result) => (dispatch, getState) => {

  if (!result.destination) {
      return;
    }

  const reorder = (list, startIndex, endIndex) => {
    const result = [ ...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const initTodosState = getState().todos.map((todo) => {
    if(result.draggableId === todo.id) {
      todo.taskStatus = result.destination.droppableId;
    }
    return todo;
  })
  
  const todos = reorder(
    initTodosState,
    result.source.index,
    result.destination.index    
  );  

  dispatch({
    type: tasksType.ON_DRAG_END,
    updatedTodos: todos
  })

  setTodosToLocalStorage('Tasks', getState());
}

export const saveStateToStorage = () => {
  return ({
    type: tasksType.LOAD_STORAGE_TO_STORE,
    payload: getTodosFromLocalStorage('Tasks')    
  })
};

export const getComments = (payload) => {
  return ({
    type: tasksType.ADD_COMMENT,
    payload
  })
};

export const createTask = () => (dispatch, getState) => {
  const { inputValue } = getState();  
  if (!inputValue) return;
  dispatch({
    type: tasksType.CREATE_TASK,    
    id: uuid(),
    taskStatus: 'todo'      
  })
  setTodosToLocalStorage('Tasks', getState());
};

export const changeValue = (inputValue) => {
  return ({
    type: tasksType.CHANGE_VALUE,
    inputValue
  })
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