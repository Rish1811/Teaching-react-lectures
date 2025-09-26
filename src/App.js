import React, { useState } from 'react';
import './App.css';
import Footer from './mycomponent/footer';
//import Todolist from './mycomponent/todolist';
import Header from './mycomponent/header';
import Todos  from './mycomponent/todos';
import AddTodo from './mycomponent/addtodo';
function App() {

  const onDelete=(t)=>{
    console.log("hello i am delete button",t);
    //in the react this splice is not working yet.
    // let index=todo.indexOf(todo);
    // todo.splice(index,1);
    setTodos(todo.filter((e)=>{
      return e!==t;
    }));
  }

const addTodo=(title,desc)=>{
  console.log("The submit button is clicked ",title,desc);
  let sno=todo[todo.length-1].sno + 1;
  const mytodo={
    sno:sno,
    title:title,
    desc:desc
  }
  setTodos([...todo,mytodo]);
  console.log(mytodo);
}

let [todo ,setTodos]=useState([
  {
    sno: 1,
    title: "The TOdo list UI design",
    desc:"The task for the design the todolist"
  },
   {
    sno: 2,
    title: "The footer design",
    desc:"The task for the design the Footer"
  },
   {
    sno: 3,
    title: "The Sinup page design",
    desc:"The task for the design the signup"
  },
   {
    sno: 4,
    title: "The Clock design",
    desc:"The task for the design the Clock"
  },
   {
    sno: 5,
    title: "The Clock design",
    desc:"The task for the design the Clock"
  }
]);

  return (
 <>
 <Header title="TOdo list" searchbar={true} />
  <AddTodo addTodo={addTodo}/>
 <Todos todos={todo} Deletebtn={onDelete} />

 <Footer  />

 </>
  );
}

export default App;
