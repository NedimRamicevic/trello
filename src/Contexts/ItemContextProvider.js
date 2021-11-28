import React, {useState} from 'react'

export const ItemContext = React.createContext()

const preDefinedContainerList = ["To Do", "In Progress","Done"]
const preDefineditemList = [
    {id:1, name : "neim", type : "Done", color : "blue" },
    {id:2, name : "nedim", type : "Done", color : "pink" },
    {id:3, name : "sefa", type : "Done", color : "red" },
]



export function ItemContextProvider({children}) {

    const [containerList, setcontainerList] = useState(preDefinedContainerList)
    const [itemList, setItemList] = useState(preDefineditemList)
    const [newTask, setNewTask] = useState()

    const handleChange = (target) => {
        const {name, value} = target
        setNewTask(
            (prev) => {
                return {
                    ...prev, 
                id : itemList.length + 1,    
                name : value,
                type : name,
                color : "yellow"
                }
            }   
        )
    }



    return (
        <ItemContext.Provider value = {{handleChange, containerList, newTask, setcontainerList, itemList,setItemList }}>
            {children}
        </ItemContext.Provider>
    )
}

