import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import React,{useState} from 'react';
import {AddTodo} from "./MyComponents/AddTodo";
function App() {
  const onDelete = (todo)=>{
    console.log("I am onDelete of" ,todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo =(title,description) =>{
    let sno
    if(todos.length==0){
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
  const [todos,setTodos]= useState([
    {
      sno:1,
      title:"hola",
      description: "You have to do this"
    },
    {
      sno:2,
      title:"hello",
      description: "You can do this"
    }
  ])
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
