import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, closetodo, editTodo, removeTodo, toggleCom } from '../features/todo/todoslice'

function forcheck({todo}) {
    const [istodoEd, setIstodoEd] = useState(false)
    const dispatch = useDispatch()
    const [ed, setEd] = useState(todo.text)
    const [com, setCom] = useState(false)
    
    const toggleCompleted = () => {
      if (com === false){
        setCom(true);
        dispatch(toggleCom(todo.id))
      } else {setCom(false) 
        dispatch(toggleCom(todo.id))
      }
    }

  return (
    <li
      className={`mt-4 flex justify-between items-center ${todo.completed ? "bg-green-600" : "bg-zinc-800"} px-4 py-2 rounded`}
      key={todo.id}
      >
      <input type="checkbox" disabled={istodoEd} className="cursor-pointer size-5" checked={com} onChange={toggleCompleted} />
      <input type='text' value={ed} readOnly={!istodoEd} onChange={(e) => setEd(e.target.value)} className={`text-white outline-none ${todo.completed ? "bg-green-600" : "bg-zinc-800"}`}/>
      <button
        onClick={() =>{
          if (!istodoEd) {
            dispatch(editTodo({ id: todo.id, text: ed }))
            setIstodoEd(true)
            dispatch(closetodo(todo.id))
          } else setIstodoEd((prev) => !prev);
        } 
  
      }
      disabled={todo.completed} 
      className='text-white'>
        {istodoEd ? "📁" : "✏️"}
      </button>
      <button
       onClick={() => dispatch(removeTodo(todo.id))}
        className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </li>
  )
}

export default forcheck
