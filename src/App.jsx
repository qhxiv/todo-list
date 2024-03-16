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
        <Todo content='sleep'/>
        <Todo content='read book'/>
      </List>

      <List status='Completed'>
        <Todo content='cook'/>
        <Todo content='write code'/>
        <Todo content='eat'/>
      </List>
    </div>
  );
}

export default App;