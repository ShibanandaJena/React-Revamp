import React from 'react'
import Item from './Item';
import { useState } from 'react';

function CarItems({ items }) {
    let [activeItems,setactiveItems] = useState([])

    let onBuyButton = (item,event)=>{
        let newItems = [...activeItems,item]
        setactiveItems(newItems)
    }
    
    return (
        <>
            <ul className="list-group">
                {items.map((item) => (
                    <Item
                        carModels={item}
                        key={item}
                        bought={activeItems.includes(item)}
                        handleBuyButton={(event)=>onBuyButton(item,event)}
                        ></Item>
                ))}

            </ul>
        </>
    )
}

export default CarItems