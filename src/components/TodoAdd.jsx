import { useState } from 'react';

function TodoAdd() {
  return (
    <div className="todo-add">
      <input type="text" placeholder='Enter a new todo' className="todo-add__input" />

      <button className="todo-add__button">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoAdd;