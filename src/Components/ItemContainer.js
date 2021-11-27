import  {React, useContext } from 'react'
import { ItemContext } from '../Contexts/ItemContextProvider'
import Item from './Item'

function ItemContainer({name, itemList}) {

    const {containerList,setcontainerList} = useContext(ItemContext)
    const onDragOver = (ev) =>{
        ev.preventDefault()
    }
    const onDrop = (ev,cat) =>{
        console.log("containerList",containerList[0])
        let id = ev.dataTransfer.getData("name")
        let newList = containerList
        newList.push({name:id})
        setcontainerList(prev =>(
            prev.filter(x =>{
                if (x.name === containerList[cat].name) {
                    x.itemList = newList
                }
                return x
            })
            
        ))
        
    }

    return (
        <div className="ItemContainer" onDragOver={(e)=>onDragOver(e)} onDrop={(e)=> onDrop(e,name) } >
            <p>{name}</p>
            {itemList ? 
            itemList.filter(x => x.type === name ).map((item,index) =>(
                <Item key={index} item={item} />
            ))
            :null    
        }
        </div>
    )
}

export default ItemContainer
