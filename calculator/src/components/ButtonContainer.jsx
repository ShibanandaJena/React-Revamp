import React from 'react'
import '../App.css'


function ButtonContainer(props) {
  return (
    <div className="btn-container">{props.children}</div>
  )
}

export default ButtonContainer