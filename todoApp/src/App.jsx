import { useState, useEffect } from 'react'
import './App.css'
import { TodoContainer, TodoInput, TodoWrapper, Header, Footer  } from './components/Index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [todos, setTodo] = useState([])

  const handleTodo = (dataFromInput) => {
    setTodo((prevTodos) => [...prevTodos, dataFromInput])
  }

  useEffect(() => { }, [todos]);

  const handleDelete = (id) => {
    setTodo(todos.filter(todo => todo.id !== id));
  }


  return (
    <>
      {/* <Router>
        <Header></Header>
        <Routes>

          <Route path='/' element={
            <TodoContainer>
              <TodoInput sendTodoData={handleTodo}></TodoInput>
              <TodoWrapper todos={todos} onDelete={handleDelete}></TodoWrapper>
            </TodoContainer>
          }></Route>

          <Route path='/todos/:id' element={
              <TodoDetail todos={todos}></TodoDetail>
          }></Route>
        </Routes>
        <Footer></Footer>
      </Router> */}

<Header></Header>
    <TodoContainer>
      <TodoInput sendTodoData={handleTodo}></TodoInput>
      <TodoWrapper todos={todos} onDelete={handleDelete}></TodoWrapper>
    </TodoContainer>
    <Footer></Footer>
    </>
  )
}

export default App
