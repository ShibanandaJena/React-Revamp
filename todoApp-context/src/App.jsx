import { useState, useEffect } from 'react'
import './App.css'
import { TodoContainer, TodoInput, TodoWrapper, Header, Footer ,WelcomeMsg } from './components/Index'
import TodoItems from './store/todo-items-store'

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

<TodoItems.Provider value={{
  todos,
  handleTodo,
  handleDelete
}}>
<Header></Header>
    <TodoContainer>
      <TodoInput ></TodoInput>
      <WelcomeMsg />
      <TodoWrapper  ></TodoWrapper>
    </TodoContainer>
    <Footer></Footer>
</TodoItems.Provider>
    </>
  )
}

export default App
