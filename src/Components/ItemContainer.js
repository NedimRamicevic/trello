import  {React, useContext } from 'react'
import { ItemContext } from '../Contexts/ItemContextProvider'
import Item from './Item'
import AddButton from './AddButton'

function ItemContainer({name}) {

    const {itemList,setItemList} = useContext(ItemContext)
    const onDragOver = (ev) =>{
        ev.preventDefault()
    }
    const onDrop = (ev,cat) =>{
        let tasks =[]
        console.log("itemlist",itemList)
        let id = ev.dataTransfer.getData("name")
        tasks = itemList.filter(task =>{
            if (task.name === id) {
                task.type = cat
            }
            return task
        })
        console.log("tasks",tasks)
        setItemList(tasks)
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
        <AddButton />
        </div>
    )
}

export default ItemContainer
