import {connect} from "react-redux";
import TodoList from './todoList.component';
import "./todo.css";
import { toggleTodo, setDaily, moveTodoIndex, removeTodo , moveTodoBottom, moveTodoTop, addTodo} from '../../actions/index';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleTodo: (index) => {
            dispatch(toggleTodo(index));
        },
        removeTodo: (index) => {
            dispatch(removeTodo(index));
        },
        setDaily: (index, daily) => {
            dispatch(setDaily(index, daily));
        },
        moveTodoIndex: (oldIndex, newIndex) => {
            dispatch(moveTodoIndex(oldIndex, newIndex))
        },
        moveTodoBottom: (index) => {
            dispatch(moveTodoBottom(index));
        },
        moveTodoTop: (index) => {
            dispatch(moveTodoTop(index));
        },
        addTodo: (newTodo) => {
            let {text, monthly, dueDate} = newTodo;
            dispatch(addTodo(text, monthly, dueDate));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)