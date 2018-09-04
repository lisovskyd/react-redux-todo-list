import * as tasksType  from '../constants/actionTypes';

const initialState = {
  comments: [],
  inputValue: '',
  todos: []
};

export default function TodoListReducer(state = initialState, action) {
  switch (action.type) {

    case tasksType.ON_DRAG_END:
      let initNewState = { ...state, todos: [ ...action.updatedTodos ] };
      return initNewState;

    case tasksType.LOAD_STORAGE_TO_STORE: 
      return { ...state, ...action.payload }; 

    case tasksType.ADD_COMMENT:
      return { ...state , comments: [ ...state.comments, action.payload.body] }

    case tasksType.CREATE_TASK:
      const newTodo = {
        id: action.id,
        value: state.inputValue,
        done: action.done,
        complited: action.complited
      }
      const convertState = { ...state, todos: [ newTodo, ...state.todos ], inputValue: '' };       
      return convertState;

    case tasksType.CHANGE_VALUE:
      return {...state, 
        inputValue: action.inputValue
      }    

    case tasksType.DELETE_TASK:
      let newState = {...state};
      newState.todos = state.todos.filter((item) => {
        return item.id !== action.id       
      });
      return newState;

    case tasksType.CHANGE_COMPLETE_VALUE:  

      return {...state, todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {...todo, complited: action.value}
          } 
          return todo;
        })
      }  

    default: 
      return state
  }      
};