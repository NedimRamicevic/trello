import React from 'react'
import Item from './Item'

function ItemContainer({name, itemList}) {
    return (
        <div className="ItemContainer" >
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
