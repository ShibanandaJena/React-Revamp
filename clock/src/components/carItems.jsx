import React from 'react'
import Item from './Item';

function CarItems({items}) {
    console.log(items.length)
    return (
        <>
            <ul class="list-group">
                {items.map((item)=>(
                   <Item carModels={item} key={item}></Item>
                ))}
                
            </ul>
        </>
    )
}

export default CarItems