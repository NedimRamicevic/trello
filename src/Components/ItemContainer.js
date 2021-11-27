import  {React, useContext } from 'react'
import { ItemContext } from '../Contexts/ItemContextProvider'
import Item from './Item'

function ItemContainer({name, itemList}) {

    const {containerList,setContainerList} = useContext(ItemContext)
    const onDragOver = (ev) =>{
        ev.preventDefault()
    }
    const onDrop = (ev,cat) =>{
        let id = ev.dataTransfer.getData("name")
        containerList.forEach(element => {
            if(element.name ===  cat){
                console.log(element)
            }
        });
    }

    return (
        <div className="ItemContainer" onDragOver={(e)=>onDragOver(e)} onDrop={(e)=> onDrop(e,name) } >
            <p>{name}</p>
            {itemList ? 
            itemList.map((item,index) =>(
                <Item key={index} item={item} />
            ))
            :null    
        }
        </div>
    )
}

export default ItemContainer
