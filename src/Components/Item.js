import React from 'react'

function Item({item}) {
    const onDragStart = (ev,id) =>{
        console.log("dragStart", id)
        ev.dataTransfer.setData("id",id)
    }
    console.log(item)
    return (
        <div className="item" key={item.name} draggable onDragStart={(e)=>onDragStart(e,item.id)} style = {{backgroundColor : item.color}} >
            <p>{item.name}</p>
        </div>
    )
}

export default Item
