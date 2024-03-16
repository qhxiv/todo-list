import { useState } from 'react';

import Header from './components/Header.jsx';
import TodoAdd from './components/TodoAdd.jsx';
import Todo from './components/Todo.jsx';
import List from './components/List.jsx';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <TodoAdd />

      <List status='Current'>
        <Todo completed={false} content='sleep'/>
        <Todo completed={false} content='read book'/>
      </List>

      <List status='Completed'>
        <Todo completed={true} content='cook'/>
        <Todo completed={true} content='write code'/>
        <Todo completed={true} content='eat'/>
      </List>
    </div>
  );
}

export default App;