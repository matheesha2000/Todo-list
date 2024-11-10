import React, { useState } from 'react'
import Form from './Form'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'

const TodoList = () => {
  const [todoValue, setTodo] = useState([])

  const createTodo = (todo) => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }])
  };

  const deleteTodo = (id) => {
    setTodo(todoValue.filter((todo) => todo.id !== id))
  };

  const editTodo = (id) => {
    setTodo(todoValue.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)))
  };

  return (
    <div className="container bg-gray-700 mt-20 p-8 mr-10 rounded-md mx-auto">
      <Form createTodo={createTodo} />
      {Array.isArray(todoValue) &&
        todoValue.map((todo, index) => (
          <Todo task={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))}
    </div>
  );
};

export default TodoList

