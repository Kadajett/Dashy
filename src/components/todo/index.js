import {connect} from "react-redux";
import TodoList from './todoList.component';
import "./todo.css";
import { toggleTodo, setDaily, moveTodoIndex } from '../../actions/index';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleTodo: (index) => {
            dispatch(toggleTodo(index))
        },
        setDaily(index, daily) {
            // debugger;
            dispatch(setDaily(index, daily))
        },
        moveTodoIndex(oldIndex, newIndex) {
            dispatch(moveTodoIndex(oldIndex, newIndex))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)