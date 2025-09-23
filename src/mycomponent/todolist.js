import React from 'react'

export default function TodoList({todo,btn}) {
  return (
    <div>
    <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    <button className='btn btn-sm btn-danger' onClick={()=>{btn(todo)}}>Delete</button>
    </div>
  )
}
