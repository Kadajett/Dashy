import ActionTypes from "./actionTypes";
import {combineReducers} from "redux";
function todosReducer(state = [], action) {

    switch(action.type) {
        case ActionTypes.ADD_TODO:
            return state.concat(action);
        case ActionTypes.REMOVE_TODO:
            return state.filter((v,i)=>i!==action.index)
        case ActionTypes.TOGGLE_TODO:
            let newState = [...state];
            newState[action.index].checked = !newState[action.index].checked;
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
