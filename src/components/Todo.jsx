import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaTrashAlt } from 'react-icons/fa';

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div
      className="flex justify-between items-center bg-gray-800 text-white py-3 px-4 rounded-md mb-2 cursor-pointer width-50"
    >
      <p className="font-primary">{task.task}</p>
      <div className="flex items-center gap-x-4">
        <CiEdit className="text-xl" onClick={() => editTodo(task.id)} />
        <FaTrashAlt className="text-xl" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;




