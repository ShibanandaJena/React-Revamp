import React from 'react'
import '../App.css'

function Button({buttonTexts,onButtonClick}) {
  return (
    
    <>
         {buttonTexts.map((btn, index) => (
        <button 
          key={index}  // Add a unique key
          className='btn-calc'
          onClick={() => onButtonClick(btn)}
        >{btn}</button>
    ))}
    </>
    
  
  )
}

export default Button