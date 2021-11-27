import React from 'react'
import Item from './Item'

function ItemContainer({name, itemList}) {

    const onDragOver = (ev) =>{
        ev.preventDefault()
    }
    const onDrop = (ev,cat) =>{
        let id = ev.dataTransfer.getData("name")
    }

    return (
        <div className="ItemContainer" onDragOver={(e)=>onDragOver(e)} onDrop={(e)=> onDrop(e,name) } >
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
