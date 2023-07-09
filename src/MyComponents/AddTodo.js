import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title,setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit =(e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Missing title or description");
        }
        props.addTodo(title,desc)
    }
  return (
    <div className='container'>
        <h3>Add Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Description" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="description"/>
  </div>
  <button type="submit" className="btn btn-primary">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
