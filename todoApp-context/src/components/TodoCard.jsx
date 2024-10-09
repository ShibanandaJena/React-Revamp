import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../componentCss/TodoCard.css'
import TodoItems from '../store/todo-items-store'


function TodoCard({ sendTodo }) {
  const {handleDelete} = useContext(TodoItems)

  let todo = sendTodo;

  return (
    <>
      <div className="card custom-card shadow-sm border-light">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="card-title text-primary">
              <strong>{todo.title}</strong>
            </h5>
            <span className="card-date text-muted">
              <strong>{todo.curr_date}</strong>
            </span>
          </div>
          <p className="card-text mt-2">
            {todo.description} <a href="#" className="text-info">read more...</a>
          </p>
          <p className="card-author text-muted mt-1">
            <small>By {todo.author}</small>
          </p>
          <div className="mt-3">
          <button type="button" onClick={() => handleDelete(todo.id)} className="btn btn-danger">
          Delete
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default TodoCard