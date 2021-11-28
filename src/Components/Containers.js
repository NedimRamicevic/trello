import React, { useContext,useState } from 'react'
import AddItemModal from './AddItemModal';
import {ItemContext} from '../Contexts/ItemContextProvider'
import ItemContainer from './ItemContainer'

function Containers() {
    const [showModal, setShowModal] = useState(false)
    const {containerList,itemList} = useContext(ItemContext)
    return (
        <div className="Containers" >
            <button onClick={()=>setShowModal(true)} >Add Task</button>
            {showModal ? <AddItemModal close ={setShowModal} /> : null}
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
