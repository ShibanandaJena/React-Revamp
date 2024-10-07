import { useState,useEffect } from 'react'
import './App.css'
import {TodoContainer,TodoInput,TodoWrapper,TodoCard} from './components/Index'


function App() {
  const [todos, setTodo] = useState([])

  const handleTodo = (dataFromInput)=>{
    setTodo((prevTodos)=>[...prevTodos,dataFromInput]) 
  }

  useEffect(() => {}, [todos]);

  const handleDelete=(id)=>{
    setTodo(todos.filter(todo => todo.id !== id)); 
  }


  return (
    <>
    <TodoContainer>
      <TodoInput sendTodoData={handleTodo}></TodoInput>
      <TodoWrapper todos={todos} onDelete={handleDelete}></TodoWrapper>
    </TodoContainer>
    </>
  )
}

export default App
