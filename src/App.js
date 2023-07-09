import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import React,{useEffect, useState} from 'react';
import {AddTodo} from "./MyComponents/AddTodo";
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("I am onDelete of" ,todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo =(title,description) =>{
    let sno
    if(todos.length===0){
      sno=0;
    }else{
     sno= todos[todos.length-1].sno + 1;
    }
    const myTodo={
      sno:sno,
      title:title,
      description:description
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);

    
  }
  const [todos,setTodos]= useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
      <>
      <Header title="My Todos List"  searchBar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
      </>
  );
}

export default App;
