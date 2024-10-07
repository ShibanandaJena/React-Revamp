import React, { useState } from 'react';
import '../componentCss/TodoInput.css'


function TodoInput({ sendTodoData }) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [author, setAuthor] = useState("")

  let date = new Date()
  let curr_date = date.toLocaleDateString()

  let idCounter = 0;

  const getNextId = () => {
    idCounter += 1;
    return idCounter;
  };

  const id = getNextId();

  const todo = {
    id, title, description, author, curr_date
  }

  const sendData = () => {
    sendTodoData(todo)
    setTitle("")
    setAuthor("")
    setDescription("")
  }

  return (
    <div className="todo-input">
      <h3>Add New Todo</h3>
      <div className="form-row">
        <div className="form-group">
          <input type="text"
            onChange={(e) => { setTitle(e.target.value) }}
            value={title}
            id="title"
            placeholder="Title" />
        </div>
        <div className="form-group">
          <input type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            id="author"
            placeholder="Author" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <input type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id="description"
            placeholder="Description" />
        </div>
        <button className="add-todo-btn" onClick={sendData}>Add Todo</button>
      </div>
    </div>
  );
}

export default TodoInput;
