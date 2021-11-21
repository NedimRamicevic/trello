import React from 'react'

function Item({item}) {
    console.log(item)
    return (
        <div className="item" >
            <button>{item.name}</button>
        </div>
    )
}

export default Item
