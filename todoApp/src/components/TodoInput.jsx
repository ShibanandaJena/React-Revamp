import React, { useRef } from 'react';
import '../componentCss/TodoInput.css';

// Move idCounter outside the component to preserve state across renders
let idCounter = 0;

function TodoInput({ sendTodoData }) {

  const titleRef = useRef();
  const descriptionRef = useRef();
  const authorRef = useRef();

  let date = new Date();
  let curr_date = date.toLocaleDateString();

  const getNextId = () => {
    idCounter += 1;
    return idCounter;
  };

  const sendData = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const author = authorRef.current.value;

    const todo = {
      id: getNextId(),
      title,
      description,
      author,
      curr_date
    };

    sendTodoData(todo);

    // Clear input fields after adding the todo
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    authorRef.current.value = '';
  };

  return (
    <div className="todo-input">
      <h3>Add New Todo</h3>
      <form onSubmit={sendData}>
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              ref={titleRef}
              id="title"
              placeholder="Title"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              ref={authorRef}
              id="author"
              placeholder="Author"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              ref={descriptionRef}
              id="description"
              placeholder="Description"
              required
            />
          </div>
          <button type='submit' className="add-todo-btn">Add Todo</button>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
