import React from 'react'
import {TodoCard} from '../components/Index'
import '../componentCss/TodoWrapper.css'


function TodoWrapper({todos,onDelete}) {
  
  return (
    <>
      <div className="cardWrapper">

        {todos.map((todo,index)=>(
          <TodoCard sendTodo={todo} key={index} onDelete={onDelete}></TodoCard>
        ))}
        {/* <p>{todos}</p> */}
      

      </div>
    </>
  )
}

export default TodoWrapper