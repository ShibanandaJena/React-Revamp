import React from 'react'
import '../App.css'

function Button({buttonTexts}) {
  return (
    
    <>
        {buttonTexts.map((btn)=>(
        <button>{btn}</button>
    ))}
    </>
    
  
  )
}

export default Button