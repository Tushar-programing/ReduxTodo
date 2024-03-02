import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, editTodo, removeTodo } from '../features/todo/todoslice'
import Forcheck from './forcheck'

 
function todos() {
    
    const todos = useSelector(state => state.todos)

    return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <div className='w-full' key={todo.id}>
             <Forcheck todo={todo}/>
            </div>
          ))}
      </ul>
    </>
  )
}

export default todos
