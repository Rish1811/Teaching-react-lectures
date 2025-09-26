import React from 'react'

export default function footer() {
    let footerStyle={
        position:"relative",
        color:"white",
        top:"100vh",
        width:"100%"
    }
  return (
    <div>
       <footer className='bg-dark text-list py-2' style={footerStyle}>
        <p className='text-center'>

          Copyright &copy; MyTodoList.com
        </p>
        
        
        </footer>
    </div>
  )
}
