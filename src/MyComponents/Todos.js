import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <div className="my-3">
        <h4>Todos List</h4>
        {props.todos.map((todos)=>{
            return <TodoItem todo={todos} key={todos.sno} onDelete={props.onDelete}/>
        })}
        </div>
    </div>
  )
}
