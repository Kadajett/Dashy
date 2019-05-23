import React, { Component } from 'react';
import Todo from "./todo.component";

import {DragDropContext, Droppable} from 'react-beautiful-dnd';

export default class TodoList extends Component {
    renderTodos(daily, provided) {
        return this.props.todos.map((todo, index) => {
          // Think I have daily swapped here lol
            if(todo.daily === daily) {
                return <Todo key={index} index={index} toggleTodo={this.props.toggleTodo} {...todo} {...this.props} ></Todo>
            }
            return '';
        })
    }
    onDragEnd = result => {
      const {destination, source, draggableId} = result;

      if(!destination) {
        return;
      }

      if(
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }
      // switch between daily and monthly
      if(destination.droppableId === "col2") {
        // this is probably booled backwards too...
        if(this.props) {
          this.props.setDaily(source.index, true)
        }
        
      }
      if(destination.droppableId === "col1") {
        // this is probably booled backwards too...
        if(this.props) {
          this.props.setDaily(source.index, false)
        }
      }
      // Switch index
      this.props.moveTodoIndex(source.index, destination.index)
    }
  render() {
    return (
      <DragDropContext
        
        onDragEnd={this.onDragEnd}
        
      >
        <div className="todoWrapper noselect">
          <h2 className="subText">Todo</h2>
          <button className="addTodoButton">Add Todo</button>
          <h3 className="todoHeader">Daily</h3>
          <div className="todoSeperator"></div>
          <div className="todoListWrapper darkScroll">
          
          <Droppable droppableId={"col1"}>
            {(provided) => (
               <div {...provided.droppableProps} ref={provided.innerRef}>
                {this.renderTodos(false, provided)}
                {provided.placeholder}
              </div>)
            }
            
          </Droppable>
          </div>
          <h3 className="todoHeader">Monthly</h3>
          <div className="todoSeperator"></div>
          <div className="todoListWrapper darkScroll">
          <Droppable droppableId={"col2"}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="todoListDroppable">
                {this.renderTodos(true, provided)}
                {provided.placeholder}
              </div>
              
            )
            }
            
            
          </Droppable>
          </div>
          
        </div>
      </DragDropContext>
      
    )
  }
}
