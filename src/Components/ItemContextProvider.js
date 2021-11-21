import React, {useState} from 'react'

export const ItemContext = React.createContext()

function ItemContextProvider({children}) {

    const [name, setName] = useState("Naber")


    return (
        <ItemContext.Provider value = {{name , setName}}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemContextProvider