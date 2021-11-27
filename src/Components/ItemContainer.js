import React from 'react'
import Item from './Item'

function ItemContainer({name, itemList}) {

    const onDragOver = (ev) =>{
        ev.prevenDefault()
    }
    return (
        <div className="ItemContainer" onDragOver={(e)=>onDragOver(e) } >
            <p>{name}</p>
            {itemList ? 
            itemList.map((item,index) =>(
                <Item key={index} item={item} />
            ))
            :null    
        }
        </div>
    )
}

export default ItemContainer
