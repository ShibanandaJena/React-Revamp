import React from 'react'
import Button from './Button'

function Input({handleKeyDown}) {
  return (
    <>
    <input className='mb-3' type="text" 
        //    onChange={handleBuyButton}
           onKeyDown={handleKeyDown}
           placeholder='Enter the model'/> 
    <p></p>
      
    </>
  )
}

export default Input