import './App.css'
import AddItemModal from './Components/AddItemModal';
import Containers from './Components/Containers'
import {ItemContextProvider} from './Contexts/ItemContextProvider'


function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <Containers/>
        <AddItemModal/>
      </ItemContextProvider>
    </div>
  );
}

export default App;
