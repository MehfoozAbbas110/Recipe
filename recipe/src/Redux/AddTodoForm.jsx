import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, delTodo } from './actions';

const AddTodoForm = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
    <div>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo.text}
        <button onClick={()=>dispatch(delTodo(index))}>Delete</button>

        </li>
      ))}
    </ul>
    </div>
    </>
  );
};

export default AddTodoForm;