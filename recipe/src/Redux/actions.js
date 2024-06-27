export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text
  }
});
export const delTodo = (id) => {
    return {type: DEL_TODO,
    payload: id
}
  };