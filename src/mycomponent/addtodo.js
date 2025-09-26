
import React, { useState } from 'react';

export default function AddTodo({addTodo}) {
const[title ,setTitle]=useState(""); 
const[desc ,setDesc]=useState("");


const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("Title or description cannot be empty");
    }
    addTodo(title,desc);
}

  return (
    <div className='container my-3'>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label forhtml="exampleInputEmail1" className="forhtmlm-label">Enter title</label>
    <br />
    <input type="text" className="forhtmlm-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label forhtml="exampleInputPassword1" className="forhtmlm-label">Enter Description</label>
    <br />
    <input type="text" className="forhtmlm-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">ADDTodo</button>
</form>
    </div>
  )
}
