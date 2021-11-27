import React from 'react'

function Item({item}) {
    const onDragStart = (ev,name) =>{
        console.log("dragStart", name)
        ev.dataTransfer.setData("name",name)
    }
    console.log(item)
    return (
        <div className="item" key={item.name} draggable onDragStart={(e)=>onDragStart(e,item.name)} >
            <button>{item.name}</button>
        </div>
    )
}

export default Item
