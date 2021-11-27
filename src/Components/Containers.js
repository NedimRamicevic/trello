import React, { useContext } from 'react'
import {ItemContext} from '../Contexts/ItemContextProvider'
import ItemContainer from './ItemContainer'

function Containers() {
    const {containerList,itemList} = useContext(ItemContext)
    console.log(containerList)
    return (
        <div className="Containers" >
            {containerList ?
        containerList.map((key,index) => (
        <ItemContainer key={index}  name = {key} itemList ={itemList} />
        ))
        : null
        }
        </div>
    )
}

export default Containers
