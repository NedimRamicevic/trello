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

    const [itemList, setİtemList] = useState([])


    return (
        <ItemContext.Provider value = {{}}>
            {children}p
        </ItemContext.Provider>
    )
}

export default ItemContextProvider