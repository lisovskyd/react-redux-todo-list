import * as tasksType  from '../variables/actionTypes';
import { todoAuthToken } from '../variables/common';

export const signinUser = payload => {
  return ({
    type: tasksType.SIGNIN_USER,
    payload
  })
}

export const signupUser = payload => {
  return ({
    type: tasksType.SIGNUP_USER,
    payload
  })
}

export const logoutUser = () => {
  localStorage.removeItem(todoAuthToken);
  return ({
    type: tasksType.LOGOUT_USER,
    payload: {
      isAuthenticated: false
    }
  })
}

export const watchForAuthRequestAction = () => {
  return ({
    type: tasksType.WATCH_FOR_AUTH_REQUEST_ACTION
  })
}

export const authRequest = isValidToken => {  
  return ({
    type: tasksType.IS_VALID_TOKEN,
    payload: {
      isValidToken
    }    
  })
};

export const watchForDragEnd = payload => {
  return ({
    type: tasksType.WATCH_FOR_DRAG_END,
    payload
  })
};

// const helpMe = actionType => payload => ({
//     type: actionType,
//     payload
// });

// const setTasksDatabaseToStore = helpMe( tasksType.SET_TASKS_FROM_DATABASE_TO_STORE );

export const onDragEnd = (todos) => {
  return ({
    type: tasksType.ON_DRAG_END,
    payload: {
      updatedTodos: todos
    }    
  })
}

export const setTasksDatabaseToStore = payload => {
  return ({
    type: tasksType.SET_TASKS_FROM_DATABASE_TO_STORE,
    payload    
  })
};

export const getComments = payload => {
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

export const createTask = (id, value, taskStatus) => {
  return ({
    type: tasksType.CREATE_TASK,
    payload: {
      id,
      value,
      taskStatus   
    }      
  })
};

export const changeValue = inputValue => {
  return ({
    type: tasksType.CHANGE_VALUE,
    payload: {
      inputValue
    }    
  })
};

export const requestDeleteTask = todoId => {
  return ({
    type: tasksType.REQUEST_DELETE_TASK,
    payload: {
      todoId
    }
  })
};

export const deleteTask = todoId => {
  return ({
    type: tasksType.DELETE_TASK,
    payload: {
      todoId
    }
  })
}

export const requestChangeCompleteValue = (todoId, event) => {
  return ({
    type: tasksType.REQUEST_CHANGE_COMPLETE_VALUE,
    payload: {
      todoId,
      event
    }
  })
}

export const changeCompleteValue = (todoId, value) => {
  return ({
    type: tasksType.CHANGE_COMPLETE_VALUE,
    payload: {
      id: todoId,
      value 
    }    
  });
};