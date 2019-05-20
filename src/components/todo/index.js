import {connect} from "react-redux";
import TodoList from './todoList.component';
import "./todo.css";
import { toggleTodo } from '../../actions/index';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleTodo: (index) => {
            dispatch(toggleTodo(index))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)