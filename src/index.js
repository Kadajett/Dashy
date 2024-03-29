import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from "./reducers/index";

// import 
import { addTodo, removeTodo, toggleTodo } from './actions/index';

let store = createStore(rootReducer)

store.dispatch(addTodo("Daily 1", false));
store.dispatch(addTodo("Daily 2", false));
store.dispatch(addTodo("Daily 3", false));

store.dispatch(addTodo("Daily 4", false));
store.dispatch(addTodo("Daily 5", false));
store.dispatch(addTodo("Daily 6", false));

store.dispatch(addTodo("Monthly 1", true));

window.closeContextMenu = new Event('closeContextMenu');

store.dispatch({
    type: 'ADD_ENTRY', 
    text: "test", 
        emote: 'sad', 
        time: new Date(),
})
console.log(store.getState());

window.$S = store;
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
