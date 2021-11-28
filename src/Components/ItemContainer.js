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
        let id = ev.dataTransfer.getData("id")
        console.log(id)
        tasks = itemList.filter(task =>{
            console.log("dasdadasd")
            if (task.id == id) {
                console.log("babababababba")
                task.type = cat
            }
            return task
        })
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
        <AddButton cat = {name}/>
        </div>
    )
}

export default ItemContainer
