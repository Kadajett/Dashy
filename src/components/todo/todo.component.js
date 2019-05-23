import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Draggable} from 'react-beautiful-dnd';
import ContextMenu from "../rightClickMenu";
import RightClickMenu from '../rightClickMenu';

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rightClick: {
        x: 0,
        y: 0,
        visible: false
      }
    };
  }
    toggle() {
        this.props.toggleTodo(this.props.index);
    }

    clearOtherContextMenus() {
      if(window.closeContextMenu) {
        window.dispatchEvent(window.closeContextMenu);
      }
    }

    toggleContext(visible) {
      let tempState = {...this.state};
      tempState.rightClick.visible = visible;
      this.setState(tempState)
    }

    componentDidMount() {
      window.addEventListener("click", () => {
        
        this.toggleContext(false);
      })
      
      window.addEventListener("closeContextMenu", () => {
        this.toggleContext(false);
      }, false)

      this.nv.addEventListener("contextmenu", e => {
        e.preventDefault();
        this.clearOtherContextMenus();
        this.setState({...this.state, rightClick: {
          x: e.pageX,
          y: e.pageY
        }}, () => {
          this.toggleContext(true)
        });
        
      })
    }
    componentWillUnmount() {
      window.removeEventListener("closeContextMenu", () => {
        this.toggleContext(false);
      })
      window.removeEventListener("click", () => {
        this.toggleContext(false);
      })
      this.nv.removeEventListener("contextmenu", e => {
        e.preventDefault();
      })
    }
  render() {
    return (
      <div ref={elem => this.nv = elem}>
        {this.state.rightClick.visible && <RightClickMenu {...this.props} {...this.state.rightClick}>asdf</RightClickMenu> }
        <Draggable draggableId={this.props.index.toString()} index={this.props.index} > 
          {(provided) => (
            <div className="todo" onClick={this.toggle.bind(this)} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                  <span className="todoText">{this.props.text}</span>
                  
                  {!this.props.checked && <FontAwesomeIcon icon="square"></FontAwesomeIcon> }
                  {this.props.checked && <FontAwesomeIcon icon="check-square"></FontAwesomeIcon> }
            </div>
          )}
          
        </Draggable>
      </div>
    )
  }
}
