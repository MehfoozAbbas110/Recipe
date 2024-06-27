import { ADD_TODO, DEL_TODO } from './actions';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload.text,
            completed: false
          }
        ]
      };
      case DEL_TODO:
        const newTodos=[...state.todos]
        newTodos.splice(action.payload,1);
        return{
            ...state,todos:newTodos,
        }
    default:
      return state;
  }
};

export default todoReducer;