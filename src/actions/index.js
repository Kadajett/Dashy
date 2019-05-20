import ActionTypes from "../reducers/actionTypes";

export function addTodo(text, daily) {
    return {
        type: ActionTypes.ADD_TODO,
        checked: false,
        daily,
        text,
    }
}

export function removeTodo(index) {
    return {
        type: ActionTypes.REMOVE_TODO,
        index
    }
}

export function toggleTodo(index) {
    return {
        type: ActionTypes.TOGGLE_TODO,
        index
    }
}

export function setPrice(product, price) {
    let priceArr = [...price];
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