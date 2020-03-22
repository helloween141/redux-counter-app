import './styles.css'

const counter = document.getElementById('counter')
const serverData = document.getElementById('server-data')

const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncAddBtn = document.getElementById('async_add')
const asyncListBtn = document.getElementById('async_list')
const themeBtn = document.getElementById('theme')

let state = {
    counter: 0,
    serverData: {}
}

addBtn.addEventListener('click', () => {
    state.counter++
    render()
})

subBtn.addEventListener('click', () => {
    state.counter--
    render()
})

asyncAddBtn.addEventListener('click', () => {
    setTimeout(() => {
        state.counter++
      render()
    }, 1000)
})

asyncListBtn.addEventListener('click', async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let result = await response.json(); 

    state.serverData = JSON.stringify(result)
    render()
})

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

function render() {
    counter.textContent = state.counter.toString()
    serverData.textContent = Object.keys(state.serverData).length === 0 ? '' : state.serverData
}

render()