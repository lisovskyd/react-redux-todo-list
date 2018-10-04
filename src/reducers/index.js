import * as tasksType  from '../variables/actionTypes';

const initialState = {    
  todos: [],
  comments: [],
  inputValue: '',
  isAuthenticated: false
};

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {

    case tasksType.LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      }

    case tasksType.IS_VALID_TOKEN:
      return {
        ...state,
        isAuthenticated: action.isValidToken
      };

    case tasksType.ON_DRAG_END:
      let initNewState = { ...state, todos: [ ...action.updatedTodos ] };
      return initNewState;

    case tasksType.SET_TASKS_FROM_DATABASE_TO_STORE: 
      return { ...state, todos: [ ...action.payload ] }; 

    case tasksType.ADD_COMMENT:
      return { ...state , comments: [ ...state.comments, action.payload.body] }

    case tasksType.CREATE_TASK:
      const newTodo = {
        id: action.id,
        value: action.value,
        taskStatus: action.taskStatus
      }      
      return { ...state, todos: [ ...state.todos, newTodo ], inputValue: '' };

    case tasksType.CHANGE_VALUE:
      return {...state, 
        inputValue: action.inputValue
      }    

    case tasksType.DELETE_TASK:
      let newState = {...state};
      newState.todos = state.todos.filter((item) => {
        return item.id !== action.todoId       
      });
      return newState;

    case tasksType.CHANGE_COMPLETE_VALUE:  

      return {...state, todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {...todo, taskStatus: action.value}
          } 
          return todo;
        })
      }  

    default: 
      return state
  }      
};