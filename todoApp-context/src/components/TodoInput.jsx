import React, { useContext, useRef } from 'react';
import '../componentCss/TodoInput.css'
import TodoItems from '../store/todo-items-store'



let idCounter = 0;

function TodoInput() {

  const {handleTodo} = useContext(TodoItems)

  const titleRef = useRef()
  const descriptionRef = useRef()
  const authorRef = useRef()

  let date = new Date()
  let curr_date = date.toLocaleDateString()


  const getNextId = () => {
    idCounter += 1;
    return idCounter;
  };

  const id = getNextId();

  const sendData = (e) => {
    e.preventDefault()
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const author = authorRef.current.value;

    const todo = {
      id, title, description, author, curr_date
    }
    handleTodo(todo)

    // Clear the input value after submit
    titleRef.current.value = ""
    descriptionRef.current.value = ""
    authorRef.current.value = ""

  }

  return (
    <div className="todo-input">
      <h3>Add New Todo</h3>
      <form onSubmit={sendData}>
        <div className="form-row">
          <div className="form-group">
            <input type="text"
              // onChange={(e) => { setTitle(e.target.value) }}
              // value={title}
              ref={titleRef}
              id="title"
              placeholder="Title" 
              required/>
          </div>
          <div className="form-group">
            <input type="text"
              // onChange={(e) => setAuthor(e.target.value)}
              // value={author}
              ref={authorRef}
              id="author"
              placeholder="Author" required/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <input type="text"
              // onChange={(e) => setDescription(e.target.value)}
              // value={description}
              ref={descriptionRef}
              id="description"
              placeholder="Description" required/>
          </div>
          <button type='submit' className="add-todo-btn" >Add Todo</button>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
