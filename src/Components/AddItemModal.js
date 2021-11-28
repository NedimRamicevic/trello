import {React,useContext, useRef} from 'react'
import { ItemContext } from '../Contexts/ItemContextProvider'

function AddItemModal() {
    const {setNewTask,itemList} = useContext(ItemContext)
    const refId = useRef()
    const refName = useRef()
    const refColor = useRef()
    const submitItem= () => {
        setNewTask(
            (prev) => {
                return {
                    ...prev, 
                id : itemList.length + 1,    
                name : refId.current.value,
                type : refName.current.value,
                color : refColor.current.value
                }
            }   
        )
    }

    return (
        <div className="Modal" >
            <input ref={refId} placeholder="Name"  ></input>
            <input ref={refName} placeholder="Type"  ></input>
            <input ref={refColor} placeholder="Color"  ></input>
            <button onClick={submitItem} >Add Item</button>
        </div>
    )
}

export default AddItemModal
