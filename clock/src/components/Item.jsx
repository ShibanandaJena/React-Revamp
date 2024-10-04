import React from 'react'
import '../App.css'
import Button from './Button'

function Item({carModels,handleBuyButton,bought}) {


return (
    <>
    <li className={`list-group-item ${bought && "active"}`} >{carModels}
    <Button handleBuyButton={handleBuyButton}></Button>
    </li>
    
    </>
  )
}

export default Item