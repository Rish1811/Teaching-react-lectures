import React from 'react'
import TodoList from './todolist';

export default function todos(props) {
  return (
    <div className='container'>
      <h3 className='text-center'>Todo List</h3>
      {/* advance method */}
      {/* message no list remain */}
      { props.todos.length===0? "No element in the list":
      props.todos.map((todos)=>{
        return <TodoList todo={todos} key={todos.sno} btn={props.Deletebtn}/>
      })
      }
    
      {/* basic method */}
      {/* <TodoList todo={props.todos[3]}/> */}
    </div>
    
  )
}
