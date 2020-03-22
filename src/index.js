import './styles.css'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer'
import ReduxThunk from 'redux-thunk'

import { addCounter, subCounter, asyncCounter, asyncList } from './redux/actions'
import thunk from 'redux-thunk'

const counter = document.getElementById('counter')
const serverData = document.getElementById('server-data')

const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncAddBtn = document.getElementById('async_add')
const asyncListBtn = document.getElementById('async_list')
const themeBtn = document.getElementById('theme')

let store = createStore(rootReducer, {
    counter: 0,
    serverData: {}
}, applyMiddleware(thunk))

addBtn.addEventListener('click', () => {
    store.dispatch(addCounter())
})

subBtn.addEventListener('click', () => {
    store.dispatch(subCounter())
})

asyncAddBtn.addEventListener('click', () => {
    store.dispatch(asyncCounter())
})

asyncListBtn.addEventListener('click', async () => {
    store.dispatch(asyncList())
})

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state.counter.toString()
    serverData.textContent = Object.keys(state.serverData).length === 0 ? '' : state.serverData
})

store.dispatch({type: 'INIT'})
