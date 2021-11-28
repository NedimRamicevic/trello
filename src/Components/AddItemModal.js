import {React,useContext, useRef,useState} from 'react'
import { ItemContext } from '../Contexts/ItemContextProvider'

function AddItemModal() {
    const {setNewTask,itemList,setItemList,newTask} = useContext(ItemContext)
    const refId = useRef()
    const refName = useRef()
    const refColor = useRef()

    const [showBtn, setShowBtn] = useState(false);

    const showBtnFun = ({target}) => {
        const value = target.value;
        if (value !== "") {
            setShowBtn(true)
        }
        else setShowBtn(false)
    }

    const handleChange = () => {

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
    const handleSubmit = () => {
        setItemList(prev =>(
            [...prev,newTask]
            ))
        refId.current.value =""
        refName.current.value =""
        refColor.current.value =""
     }

    return (
        <div className="Modal" >
            <input ref={refId} placeholder="Name" onChange={showBtnFun} ></input>
            <input ref={refName} placeholder="Type"  onChange={handleChange}></input>
            <input ref={refColor} placeholder="Color"  onChange={handleChange}></input>
            {showBtn ? (
            <button onClick={handleSubmit} >Add Task</button>
        ) : null 
        }
        </div>
    )
}

export default AddItemModal
