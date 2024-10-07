import React from 'react'

function TodoContainer(props) {
  return (
    <div className="container">
        {props.children}
    </div>
  )
}

export default TodoContainer