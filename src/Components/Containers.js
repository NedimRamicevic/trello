import React, { useContext } from 'react'
import {ItemContext} from '../Contexts/ItemContextProvider'
import ItemContainer from './ItemContainer'

function Containers() {
    const {containerList} = useContext(ItemContext)
    console.log(containerList)
    return (
        <div className="Containers" >
            {containerList ?
        containerList.map((x,index) => (
        <ItemContainer key={index}  name = {x.name} itemList ={x.itemList} />
        ))
        : null
        }
        </div>
    )
}

export default Containers
