import ActionTypes from "../reducers/actionTypes";

export function addTodo(text, daily, dueDate = false) {
    return {
        type: ActionTypes.ADD_TODO,
        checked: false,
        daily,
        text,
        dueDate,
    }
}

export function removeTodo(index) {
    return {
        type: ActionTypes.REMOVE_TODO,
        index,
    }
}

export function toggleTodo(index) {
    return {
        type: ActionTypes.TOGGLE_TODO,
        index,
    }
}

export function setDaily(index, daily) {
    return {
        type: ActionTypes.SET_DAILY,
        index,
        daily,
    }
}

export function moveTodoIndex(oldIndex, newIndex) {
    return {
        type: ActionTypes.MOVE_TODO_INDEX,
        oldIndex,
        newIndex,
    }
}

export function setPrice(product, price) {
    let priceArr = [...price];
    // debugger;
    return {
        type: ActionTypes.SET_PRICE,
        product,
        price: priceArr,
    }
}

export function setProduct(box, product) {
    return {
        type: ActionTypes.SET_PRODUCT,
        box,
        product,
    }
}