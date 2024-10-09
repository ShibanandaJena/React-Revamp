import React,{useContext} from 'react'
import TodoItems from '../store/todo-items-store'


function WelcomeMsg() {
  const {todos} = useContext(TodoItems)

  return todos.length===0 && <div><h2>No todo tasks yet !!! U are good to go</h2></div>;
  
}

export default WelcomeMsg