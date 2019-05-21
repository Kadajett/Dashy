import React from 'react';
import './App.css';
import TodoList from './components/todo';
import FinanceBlock from './components/finance';
import Journal from './components/journal/index';
import Clock from './components/clock'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquare, faCheckSquare} from "@fortawesome/free-solid-svg-icons";

library.add(faSquare, faCheckSquare)

function App() {
  return (
    <div className="pageContainer">
      <Clock></Clock>
      <FinanceBlock product="doge"></FinanceBlock>
      <FinanceBlock product="bitcoin"></FinanceBlock>
      <FinanceBlock product="ethereum"></FinanceBlock>
      <TodoList></TodoList>
      <Journal></Journal>
      
    </div>
  );
}

export default App;
