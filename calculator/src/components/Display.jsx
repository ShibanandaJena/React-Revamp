import React from 'react'
import '../App.css'

function Display({calVal}) {
  return (
    <input type="text" 
           value={calVal} 
           className='input' 
           readOnly/>

  )
}

export default Display