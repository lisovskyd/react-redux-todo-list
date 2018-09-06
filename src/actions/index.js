import { setTodosToLocalStorage } from '../helpers/';
import * as tasksType  from '../variables/actionTypes';
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

export const getTasksFromLocalStorage = () => {
  return ({
    type: tasksType.GET_TASKS_FROM_LOCALSTORAGE
  })
}

export const setTasksFromLocalStorageToStore = (payload) => {
  return ({
    type: tasksType.SET_TASKS_FROM_LOCALSTORAGE_TO_STORE,
    payload    
  })
};

export const getComments = (payload) => {
  return ({
    type: tasksType.ADD_COMMENT,
    payload
  })
};

export const stopAddComments = () => {
  return ({
    type: tasksType.STOP_ADD_COMMENTS
  })
}

export const commentRequest = () => {
  return ({
    type: tasksType.REQUEST_COMMENT
  })
};

export const requestCreateTask = () => {
  return ({
    type: tasksType.REQUEST_CREATE_TASK
  })
}

export const createTask = () => {
  return ({
    type: tasksType.CREATE_TASK,    
    id: uuid(),
    taskStatus: 'todo'      
  })
};

export const changeValue = (inputValue) => {
  return ({
    type: tasksType.CHANGE_VALUE,
    inputValue
  })
};

export const deleteTask = (todosId) => {
  return ({
    type: tasksType.DELETE_TASK,
    todosId: todosId
  })
};

export const changeCompleteValue = (todosId, event) => {
  const target = event.target;
  return ({
    type: tasksType.CHANGE_COMPLETE_VALUE,
    id: todosId,
    value: target.value
  });
};