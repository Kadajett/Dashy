import React, { Component } from 'react';
import Todo from "./todo.component";

export default class TodoList extends Component {
    renderTodos(daily) {
        return this.props.todos.map((todo, index) => {
            if(todo.daily === daily) {
                return <Todo key={index} index={index} toggleTodo={this.props.toggleTodo} {...todo}></Todo>
            }
            return '';
        })
    }
  render() {
    return (
      <div className="todoWrapper">
        <h2 className="subText">Todo</h2>
        {this.renderTodos(false)}
      </div>
    )
  }
}
