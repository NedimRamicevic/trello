import { useContext } from 'react';
import './App.css';
import {ItemContainer} from './Components/ItemContainer'
import {ItemContextProvider,ItemContext} from './Contexts/ItemContextProvider'


function App() {
  const {containerList} = useContext(ItemContext)
  return (
    <div className="App">
      <ItemContextProvider>
        {containerList ?
        containerList.map(x => (
        <ItemContainer name = {x.name} itemList ={x.itemList} />
        ))
        : null
        }
      </ItemContextProvider>
    </div>
  );
}

export default App;
