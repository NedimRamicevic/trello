import React from 'react'
import {Item} from './Item'

function ItemContainer({name, itemList}) {
    return (
        <div className={name} >
            {itemList ? 
            itemList.map(item =>(
                <Item />
            ))    
        }
        </div>
    )
}

export default ItemContainer
