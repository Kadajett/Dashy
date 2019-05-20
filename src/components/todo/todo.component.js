import React, { Component } from 'react'

export default class Todo extends Component {
    toggle() {
        this.props.toggleTodo(this.props.index);
    }
  render() {
    return (
      <div className="todo" onClick={this.toggle.bind(this)}>
            {this.props.text}
            {this.props.checked && "checked"}
      </div>
    )
  }
}
