import React, { Component } from 'react';
import Todo from "./todo.component";

import {DragDropContext, Droppable} from 'react-beautiful-dnd';

export default class TodoList extends Component {
    constructor(props) {
      super(props);

      this.state = {
        newTodo: {
          text: '',
          monthly: false
        }
      }

      this.onAddTodoClick = this.onAddTodoClick.bind(this);
      this.onSetNewTodoMonthly = this.onSetNewTodoMonthly.bind(this);
      this.onTodoInputChange = this.onTodoInputChange.bind(this);
    }
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

    onTodoInputChange(e) {
      // debugger;
      this.setState({...this.state, newTodo: {
        ...this.state.newTodo,
        text: e.target.value,
      }})
    }

    clearTodo() {
      this.createTodoInput.value = "";
      this.createTodoMonthlyCheckbox.switchValue = "off";
    }

    isNewTodoValid() {
      if(this.state.newTodo.text) {
        return true;
      }
      return false;
    }

    onAddTodoClick(e) {
      if(this.isNewTodoValid()) {
        this.props.addTodo(this.state.newTodo);
        this.clearTodo();
      }
    }

    onSetNewTodoMonthly(e) {
      let switchValue = false;
      switch(e.target.value) {
        case 'on':
          switchValue = true;
          break;
        case 'off':
        default:
          switchValue = false;
      }

      this.setState({...this.state, newTodo: {
        ...this.state.newTodo,
        monthly: switchValue,
      }});
    }

    render() {
      return (
        <DragDropContext
          
          onDragEnd={this.onDragEnd}
          
        >
          <div className="todoWrapper noselect">
            <h2 className="subText">Todo</h2>
            <div className="todoCreationWrapper">
              <input type="text" name="createTodoInput" id="createTodoInputText" onChange={this.onTodoInputChange} ref={el => this.createTodoInput = el}/>
              
              <button className="addTodoButton" onClick={this.onAddTodoClick}>+</button>
              <br/>
              <label htmlFor="monthlyTodoCheckbox">Monthly</label>
              <input type="checkbox" name="monthlyTodoCheckbox" id="monthlyTodoCheckbox" label="monthly" onChange={this.onSetNewTodoMonthly} ref={el => this.createTodoMonthlyCheckbox = el}/>
              
              
            </div>
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
