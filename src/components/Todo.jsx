import { useState } from 'react';

function Todo({ content }) {
  return (
    <li className="todo">
      <span className="todo__content {}">{content}</span>
      <div className="todo__line"></div>

      <div className="todo__control">
        <button className="todo__modify">
          <i class="fa-solid fa-pencil"></i>
        </button>

        <button className="todo__check">
          <i class="fa-solid fa-check"></i>
        </button>

        <button className="todo__delete">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </li>
  );
}

export default Todo;