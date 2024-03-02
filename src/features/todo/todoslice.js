import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "hello world"}]
}

export const todoslice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, text:action.text}: todo);
        },
        toggleCom: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
        },
        closetodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload ? {...todo, text:action.text}: todo)
        }
    }
})

export const {addTodo, removeTodo, editTodo, toggleCom, closetodo} = todoslice.actions

export default todoslice.reducer