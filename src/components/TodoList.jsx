import React from 'react'
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div className='p-3'>
      { todos.map(todo => {
        return (
          <TodoItem key={todo.id} todo={todo}/>
        )
      })}
    </div>
  )
}

export default TodoList