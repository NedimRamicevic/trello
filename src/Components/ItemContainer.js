import React from 'react'
import Item from './Item'

function ItemContainer({name, itemList}) {
    return (
        <div className="ItemContainer" >
            <p>{name}</p>
            {itemList ? 
            itemList.map(item =>(
                <Item name ={item.name} />
            ))
            :null    
        }
        </div>
    )
}

export default ItemContainer
