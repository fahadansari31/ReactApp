import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    
    <div>
        <h5>{todo.title}</h5>
        <p>{todo.desc}</p>
        <button type="button" className="btn btn-sm btn-danger" onClick={ () =>{onDelete(todo.title)}}>Delete</button>
    </div>
    
  )
}

