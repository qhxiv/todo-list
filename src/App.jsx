import { useState } from 'react';

import Header from './components/Header.jsx';
import TodoAdd from './components/TodoAdd.jsx';
import Todo from './components/Todo.jsx';
import List from './components/List.jsx';

import './App.css';

function App() {
  const [currentList, setCurrentList] = useState(
    JSON.parse(localStorage.getItem('currentList')) || []
  );

  const [completedList, setCompletedList] = useState(
    JSON.parse(localStorage.getItem('completedList')) || []
  );

  function updateTodoList(id, content, completed) {
    const list = completed ? completedList : currentList;
    const setList = completed ? setCompletedList : setCurrentList;
    const index = list.findIndex(item => item.content === id);

    const nextList = [
      ...list.slice(0, index),
      {completed, content},
      ...list.slice(index + 1)
    ];

    localStorage.setItem(completed ? 'completedList' : 'currentList', JSON.stringify(nextList));
    setList(nextList);
  }
  
  function removeTodo(id, completed) {
    const list = completed ? completedList : currentList;
    const setList = completed ? setCompletedList : setCurrentList;
    const index = list.findIndex(item => item.content === id);

    const nextList = [
      ...list.slice(0, index),
      ...list.slice(index + 1)
    ];

    localStorage.setItem(completed ? 'completedList' : 'currentList', JSON.stringify(nextList));
    setList(nextList);
  }
  
  function newTodo(content) {
    let duplicatedItem = currentList.find(item => item.content === content);
    if (duplicatedItem === undefined)
      duplicatedItem = completedList.find(item => item.content === content);
    
    if (content.length !== 0 && duplicatedItem === undefined) {
      const nextList = [
        {completed: false, content},
        ...currentList
      ];

      localStorage.setItem('currentList', JSON.stringify(nextList));
      setCurrentList(nextList);
    }
  }

  function addTodo(content, completed) {
    const list = completed ? completedList : currentList;
    const setList = completed ? setCompletedList : setCurrentList;
    const nextList = [
      {completed, content},
      ...list
    ];

    localStorage.setItem(completed ? 'completedList' : 'currentList', JSON.stringify(nextList));
    setList(nextList);
  }
  
  function completeTodo(id) {
    removeTodo(id, false);
    addTodo(id, true);
  }

  function restoreTodo(id) {
    removeTodo(id, true);
    addTodo(id, false);
  }
  
  return (
    <div className="app">
      <Header />

      <TodoAdd
        newTodo={newTodo}
      />

      <div className="list-wrapper">
        <List status='Current'>
          {currentList.length === 0 ?
            <p className="list__placeholder">Empty</p>
          :  
            currentList.map(item =>
              <Todo
                completed={item.completed}
                content={item.content}
                updateTodoList={updateTodoList}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
                restoreTodo={restoreTodo}
              />
            )
          }
        </List>

        <List status='Completed'>
          {completedList.length === 0 ?
            <p className="list__placeholder">Empty</p>
          :
            completedList.map(item =>
              <Todo
                completed={item.completed}
                content={item.content}
                updateTodoList={updateTodoList}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
                restoreTodo={restoreTodo}
              />
            )
          }
        </List>
      </div>
    </div>
  );
}

export default App;