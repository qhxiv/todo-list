import { useState } from 'react';

import Header from './components/Header.jsx';
import TodoAdd from './components/TodoAdd.jsx';
import Todo from './components/Todo.jsx';
import List from './components/List.jsx';

import './App.css';

function App() {
  const [currentList, setCurrentList] = useState([
    // {completed: false, content: 'sleep'},
    // {completed: false, content: 'read book'}
  ]);

  const [completedList, setCompletedList] = useState([
    // {completed: true, content: 'cook'},
    // {completed: true, content: 'eat'},
    // {completed: true, content: 'write code'}
  ]);

  function updateTodoList(id, content, completed) {
    const list = completed ? completedList : currentList;
    const setList = completed ? setCompletedList : setCurrentList;
    const index = list.findIndex(item => item.content === id);

    setList([
      ...list.slice(0, index),
      {completed, content},
      ...list.slice(index + 1)
    ]);
  }
  
  function removeTodo(id, completed) {
    const list = completed ? completedList : currentList;
    const setList = completed ? setCompletedList : setCurrentList;
    const index = list.findIndex(item => item.content === id);

    setList([
      ...list.slice(0, index),
      ...list.slice(index + 1)
    ]);
  }
  
  function newTodo(content) {
    let duplicatedItem = currentList.find(item => item.content === content);
    if (duplicatedItem === undefined)
      duplicatedItem = completedList.find(item => item.content === content);
    
    if (content.length !== 0 && duplicatedItem === undefined) {
      setCurrentList([
        {completed: false, content},
        ...currentList
      ]);
    }
  }

  function addTodo(content, completed) {
    const list = completed ? completedList : currentList;
    const setList = completed ? setCompletedList : setCurrentList;

    setList([
      {completed, content},
      ...list
    ]);
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

      <List status='Current'>
        {currentList.length === 0 ?
          <p className="list__placeholder">Your haven't added any todos yet</p>
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
          <p className="list__placeholder">You hven't completed any todos yet</p>
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
  );
}

export default App;