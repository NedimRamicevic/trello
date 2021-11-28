import {React,useContext,useState,useRef} from 'react'
import {ItemContext} from '../Contexts/ItemContextProvider'

function AddButton({cat}) {
    const {setItemList,handleChange,newTask} = useContext(ItemContext)
    const [showBtn, setShowBtn] = useState(false);
    const ref = useRef()
    const showBtnFun = ({target}) => {
        const value = target.value;
        if (value !== "") {
            setShowBtn(true)
        }
        else setShowBtn(false)
        handleChange(target)
    }
    const handleSubmit = () => {
        setItemList(prev =>(
            [...prev,newTask]
            ))
        ref.current.value =""
     }
    return (
        <div>
        <input ref={ref} type="text" name={cat} placeholder="New Task" onChange={showBtnFun}></input>
        {showBtn ? (
            <button onClick={handleSubmit} >Add Task</button>
        ) : null 
        }
    </div>
    )
}

export default AddButton
