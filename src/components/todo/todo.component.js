import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Draggable} from 'react-beautiful-dnd';

export default class Todo extends Component {
    toggle() {
        this.props.toggleTodo(this.props.index);
    }
  render() {
    return (
      <Draggable draggableId={this.props.index.toString()} index={this.props.index}>
        {(provided) => (
          <div className="todo" onClick={this.toggle.bind(this)} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef} ref={provided.innerRef}>
                <span className="todoText">{this.props.text}</span>
                
                {!this.props.checked && <FontAwesomeIcon icon="square"></FontAwesomeIcon> }
                {this.props.checked && <FontAwesomeIcon icon="check-square"></FontAwesomeIcon> }
          </div>
        )}
        
      </Draggable>
      
    )
  }
}
