import React, {useState} from 'react'

export const ItemContext = React.createContext()

const preDefinedList = {
    toDo : {
        itemList : []
    },
    inProgres : {
        itemList : []
    },
    done : {
        itemList : []
    }
}



function ItemContextProvider({children}) {

    const [allTasks, setAllTasks] = useState([])
    const [newTask, setNewTask] = useState({})

    const handleChange = ({target}) => {
        const[name, value] = target
        setNewTask(
            (prev) => {
                return {
                    ...prev, 
                [name] : value,
                id : Date.now() 
                }
            }   
        )}

    const handleSubmit = (event) => {
        if(!newTask.title) return;
        setAllTasks(
            (prev) => {
                return [newTask, ...prev]
            }
        )
        setNewTask(
            {}
        )
    }

    const [itemList, setİtemList] = useState([])


    return (
        <ItemContext.Provider value = {{}}>
            {children}p
        </ItemContext.Provider>
    )
}

export default ItemContextProvider