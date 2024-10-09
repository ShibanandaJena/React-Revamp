import React,{useContext} from 'react'
import {TodoCard} from './Index'
import TodoItems from '../store/todo-items-store'
import '../componentCss/TodoWrapper.css'


function TodoWrapper() {
  
  const {todos} = useContext(TodoItems)
  

  return (
    <>
      <div className="cardWrapper">

        {todos.map((todo,index)=>(
          <TodoCard sendTodo={todo} key={index} ></TodoCard>
        ))}
        {/* <p>{todos}</p> */}
      

      </div>
    </>
  )
}

export default TodoWrapper