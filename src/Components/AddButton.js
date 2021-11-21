import {React,useState} from 'react'

function AddButton() {

    const [showBtn, setShowBtn] = useState(false);
    const showBtnFun = ({target}) => {
        const value = target.value;
        if (value !== "") {
            setShowBtn(true)
        }
        else setShowBtn(false)
    }
    return (
        <div>
        <input type="text" placeholder="New Task" onChange={showBtnFun}></input>
        {showBtn ? (
            <button onClick={handleSubmit} >Add Task</button>
        ) : null 
        }
    </div>
    )
}

export default AddButton
