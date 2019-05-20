import React from 'react';
import './App.css';
import TodoList from './components/todo';
import FinanceBlock from './components/finance';
import Journal from './components/journal/index';

function App() {
  return (
    <div className="pageContainer">
      <FinanceBlock product="doge"></FinanceBlock>
      <FinanceBlock product="bitcoin"></FinanceBlock>
      <TodoList></TodoList>
      <Journal></Journal>
      
    </div>
  );
}

export default App;
