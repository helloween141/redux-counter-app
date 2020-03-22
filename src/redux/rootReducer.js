import { ADD_COUNTER, SUB_COUNTER, ASYNC_COUNTER, ASYNC_LIST } from "./types"

export function rootReducer(state, action) {
    if (action.type === ADD_COUNTER) {
        return { ...state, counter: ++state.counter }
    } else if (action.type === SUB_COUNTER) {
        return { ...state, counter: --state.counter }
    }
    else if (action.type === ASYNC_COUNTER) {
        return { ...state, counter: ++state.counter }
    }
    else if (action.type === ASYNC_LIST) {
        return { ...state, serverData: action.payload }
    }

    return state
}