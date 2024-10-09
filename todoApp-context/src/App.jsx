import { useState,useReducer } from 'react'
import './App.css'
import { TodoContainer, TodoInput, TodoWrapper, Header, Footer ,WelcomeMsg } from './components/Index'
import TodoItems from './store/todo-items-store'
import {TodoItemsContextProvider} from './store/todoReducer'



function App() {

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

<TodoItemsContextProvider>
<Header></Header>
    <TodoContainer>
      <TodoInput ></TodoInput>
      <WelcomeMsg />
      <TodoWrapper  ></TodoWrapper>
    </TodoContainer>
    <Footer></Footer>
</TodoItemsContextProvider>
    </>
  )
}

export default App
