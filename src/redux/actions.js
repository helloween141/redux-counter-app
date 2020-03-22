import { ADD_COUNTER, SUB_COUNTER, ASYNC_COUNTER, ASYNC_LIST } from "./types"

export function addCounter() {
    return {
        type: ADD_COUNTER
    }
}

export function subCounter() {
    return {
        type: SUB_COUNTER
    }
}

export function asyncCounter() {
    return function (dispatch) {
        setTimeout(() => {
           return dispatch({
                type: ASYNC_COUNTER
            })
        }, 1500)
    }
}

export function asyncList() {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await response.json(); 
        return dispatch({
            type: ASYNC_LIST,
            payload: JSON.stringify(result)
        })
    }
}