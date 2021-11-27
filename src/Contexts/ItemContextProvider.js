import React, {useState} from 'react'

export const ItemContext = React.createContext()

const preDefinedContainerList = ["To Do", "In Progress","Done"]
const preDefineditemList = [
            {name : "nedim", type : "Done"},
            {name : "neim", type : "Done"},
            {name : "sefa", type : "Done"},
]



export function ItemContextProvider({children}) {

    const [containerList, setcontainerList] = useState(preDefinedContainerList)
    const [itemList, setItemList] = useState(preDefineditemList)
    const [newTask, setNewTask] = useState({})

    const handleChange = ({target}) => {
        const[name, value, column] = target
        setNewTask(
            (prev) => {
                return {
                    ...prev, 
                [name] : value,
                id : Date.now() ,
                column : column
                }
            }   
        )}

    const handleSubmit = (event) => {
        if(!newTask.title) return;
        setcontainerList(
            (prev) => {
                return [newTask, ...prev]
            }
        )
        setNewTask(
            {}
        )
    }


    return (
        <ItemContext.Provider value = {{handleSubmit, handleChange, containerList, newTask, setcontainerList, itemList,setItemList }}>
            {children}
        </ItemContext.Provider>
    )
}

