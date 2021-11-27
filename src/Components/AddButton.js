import {React,useContext,useState} from 'react'
import {ItemContext} from '../Contexts/ItemContextProvider'

function AddButton({cat}) {
    const {handleSubmit,handleChange} = useContext(ItemContext)
    const [showBtn, setShowBtn] = useState(false);
    const showBtnFun = ({target}) => {
        const value = target.value;
        if (value !== "") {
            setShowBtn(true)
        }
        else setShowBtn(false)
        handleChange(target)
    }
    return (
        <div>
        <input type="text" name={cat} placeholder="New Task" onChange={showBtnFun}></input>
        {showBtn ? (
            <button onClick={handleSubmit} >Add Task</button>
        ) : null 
        }
    </div>
    )
}

export default AddButton
