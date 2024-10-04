import React from 'react'

function Button({handleBuyButton}) {
  return (
    <>
    <button 
    className='btn btn-info'
    id="button"
    onClick={handleBuyButton}
    >Buy</button>
    </>
  )
}

export default Button