import React from 'react'

function Item({item}) {
    console.log(item)
    return (
        <div className="item" key={item.name} draggable >
            <button>{item.name}</button>
        </div>
    )
}

export default Item
