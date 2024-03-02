import { useState } from 'react'

import './App.css'
import AddTodo from './components/Addtodo'
import Todos from './components/todos'

function App() {


  return (
    <>
      <h1>this is react redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}
export default App
