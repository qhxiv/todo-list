import { useState } from 'react';

function Todo({ completed, content }) {
  return (
    <li key={content} className={completed ? 'todo todo--completed' : 'todo'}>
      <span
        className="todo__content"
      >{content}</span>
      <div className="todo__line"></div>

      <div className="todo__control">
        <button className="todo__modify">
          <i class="fa-solid fa-pencil"></i>
        </button>

        {
          completed ? (
            <button className="todo__restore">
              <i className="fa-solid fa-arrows-rotate"></i>
            </button>
          ) : (
            <button className="todo__check">
              <i className="fa-solid fa-check"></i>
            </button>
          )
        }

        <button className="todo__delete">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </li>
  );
}

export default Todo;