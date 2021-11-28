import {React,useContext, useRef,useState} from 'react'
import { ItemContext } from '../Contexts/ItemContextProvider'

function AddItemModal({close}) {
    
    const {containerList,setNewTask,itemList,setItemList,newTask} = useContext(ItemContext)
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
        handleChange()
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
        if( refId.current.value !=="" && refName.current.value!=="" && refColor.current.value !=="")
        {setItemList(prev =>(
            [...prev,newTask]
            ))
            refId.current.value =""
            refName.current.value =""
            refColor.current.value =""
            close(false)
        }
     }

    return (
        <div className="modal" >
            <div className="modal-content" >
                <div className="modal-header" >
                    <h4 className="modal-title" >Create Task</h4>
                </div>
                <div className="modal-body">
                <input ref={refId} placeholder="Name" onChange={showBtnFun} ></input>
            <select ref={refName} onChange={showBtnFun} >
            <option value="" disabled defaultValue>Select your option</option>
                {containerList ? 
                containerList.map((cat,index) =>(
                    <option key={index} value={cat} >{cat}</option>
                )) :null   
            }
            </select>
            <select ref={refColor} onChange={showBtnFun}>
                <option defaultValue>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Yellow</option>
            </select>
            {showBtn ? (
            <button onClick={handleSubmit} >Add Task</button>
        ) : null 
        }
                </div>
            </div>
        </div>
    )
}

export default AddItemModal
