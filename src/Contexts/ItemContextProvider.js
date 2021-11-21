import React, {useState} from 'react'

export const ItemContext = React.createContext()

const preDefinedList = [
     {
        name: "To Do",
        itemList : [
            {name : "nedim"},
            {name : "neim"},
            {name : "sefa"},
        ]
    },
     {
        name : "In Progress",
        itemList : []
    },
     {
        name : "Done",
        itemList : []
    }
]



export function ItemContextProvider({children}) {

    const [containerList, setcontainerList] = useState(preDefinedList)
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
        <ItemContext.Provider value = {{handleSubmit, handleChange, containerList, newTask, setcontainerList}}>
            {children}
        </ItemContext.Provider>
    )
}

