import React from 'react'

export const Todo = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.sno}</h4>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <button className = "btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default Todo
