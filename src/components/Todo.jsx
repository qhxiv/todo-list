import { useRef, useState } from 'react';

function Todo({
  completed,
  content,
  updateTodoList,
  removeTodo,
  completeTodo,
  restoreTodo
}) {
  const [isEditting, setIsEditting] = useState(false);
  const contentRef = useRef(null);

  function saveTodo() {
    const innerText = contentRef.current.innerText;

    contentRef.current.contentEditable = false;
    setIsEditting(false);
    if (innerText.length === 0) {
      removeTodo(content, completed);
    } else {
      updateTodoList(content, innerText, completed);
    }
  }

  return (
    <li key={content} className={completed ? 'todo todo--completed' : 'todo'}>
      <span
        ref={contentRef}
        className="todo__content"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            saveTodo();
          }
        }}
      >{content}</span>

      <div className="todo__line"></div>

      <div className="todo__control">
        {isEditting ? (
          <>
            <button
              onClick={saveTodo}
              className="todo__save"
            >
              <i className="fa-solid fa-floppy-disk"></i>
            </button>
          </>
        ) : (
          <>
            <button
              className="todo__modify"
              onClick={() => {
                setIsEditting(true);
                contentRef.current.contentEditable = true;
                contentRef.current.focus();
              }}
            >
              <i class="fa-solid fa-pencil"></i>
            </button>

            {completed ? (
              <button
                className="todo__restore"
                onClick={() => restoreTodo(content)}
              >
                <i className="fa-solid fa-arrows-rotate"></i>
              </button>
            ) : (
              <button
                className="todo__check"
                onClick={() => completeTodo(content)}
              >
                <i className="fa-solid fa-check"></i>
              </button>
            )}

            <button
              className="todo__delete"
              onClick={() => removeTodo(content, completed)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default Todo;