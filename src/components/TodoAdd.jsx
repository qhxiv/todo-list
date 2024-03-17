import { useRef, useState } from 'react';

function TodoAdd({ newTodo }) {
  const [todo, setTodo] = useState('');
  const inputRef = useRef(null);

  function handleOnClick() {
    newTodo(todo);
    setTodo('');
    inputRef.current.focus();
  }

  return (
    <div className="todo-add">
      <input
        ref={inputRef}
        value = {todo}
        type="text"
        placeholder='Enter a new todo'
        className="todo-add__input" 
        onChange={e => setTodo(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleOnClick();
          }
        }}
      />

      <button
        className="todo-add__button"
        onClick={handleOnClick}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoAdd;