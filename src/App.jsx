import { useState } from 'react';

import Header from './components/Header.jsx';
import TodoAdd from './components/TodoAdd.jsx';
import Todo from './components/Todo.jsx';
import List from './components/List.jsx';

import './App.css';

function App() {
  const [currentList, setCurrentList] = useState([
    {completed: false, content: 'sleep'},
    {completed: false, content: 'read book'}
  ]);

  const [completedList, setCompletedList] = useState([
    {completed: true, content: 'cook'},
    {completed: true, content: 'eat'},
    {completed: true, content: 'write code'}
  ]);

  function editTodo() {
    
  }

  function addTodo(todo) {
    let duplicatedItem = currentList.find(item => item.content === todo);
    if (duplicatedItem === undefined)
      duplicatedItem = completedList.find(item => item.content === todo);
    
    if (todo.length !== 0 && duplicatedItem === undefined) {
      setCurrentList([
        {completed: false, content: todo},
        ...currentList
      ]);
    }
  }
  
  return (
    <div className="app">
      <Header />

      <TodoAdd
        addTodo={addTodo}
      />

      <List status='Current'>
        {currentList.map(item =>
          <Todo
            completed={item.completed}
            content={item.content}
          />
        )}
      </List>

      <List status='Completed'>
        {completedList.map(item =>
          <Todo
            completed={item.completed}
            content={item.content}
          />
        )}
      </List>
    </div>
  );
}

export default App;