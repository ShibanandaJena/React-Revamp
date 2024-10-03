import React from 'react'

function ErrorMessage({items}) {
    console.log(typeof(items))
  return (
    <>
        {items.length===0 ? <h3>This is empty</h3>: null}
    </>
  )
}

export default ErrorMessage