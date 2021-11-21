import React from 'react'

function Item({name}) {
    return (
        <div className="item" >
            <button>{name}</button>
        </div>
    )
}

export default Item
