import ActionTypes from "./actionTypes";
import {combineReducers} from "redux";

function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};

function todosReducer(state = [], action) {
    let newState = [...state];
    switch(action.type) {
        case ActionTypes.ADD_TODO:
            return state.concat(action);
        case ActionTypes.REMOVE_TODO:
            return state.filter((v,i)=>i!==action.index)
        case ActionTypes.TOGGLE_TODO:
            
            newState[action.index].checked = !newState[action.index].checked;
            return newState;
        case ActionTypes.SET_DAILY:
            // let newState = [...state];
            newState[action.index].daily = action.daily;
            return newState;
        case ActionTypes.MOVE_TODO_INDEX:
            
            newState = [...array_move(newState, action.oldIndex, action.newIndex)];
            return newState;
        case ActionTypes.MOVE_TODO_TOP:
                
                newState = [...array_move(newState, action.index, 0)];
                return newState;
        case ActionTypes.MOVE_TODO_BOTTOM:
                newState = [...array_move(newState, action.index, newState.length - 1)];
                return newState;
        default:
            return state;
    }
}

function journalReducer(state=[], action) {
    switch(action.type) {
        case ActionTypes.ADD_ENTRY:
            return state.concat({text: action.text, emote: action.emote, time: action.time, id: action.id});
        case ActionTypes.REMOVE_ENTRY:
            return state.filter((v,i)=>v.id!==action.id);
        case ActionTypes.EDIT_ENTRY:
            let editIndex = state.findIndex(x => x.id === action.id);
            let newState = [...state];
            newState[editIndex] = {...newState[editIndex], ...action}
            return newState;
        default: 
            return state;
    }
}

function financeReducer(state={}, action) {
    let newState = {...state};
    
    switch(action.type) {
        case ActionTypes.SET_PRICE: 
            newState[action.product] = {price: action.price}
            return newState;
        case ActionTypes.SET_PRODUCT:
            return newState;
        default:
            return newState;
    }
}

export default combineReducers({todos: todosReducer, journal: journalReducer, finance: financeReducer});
