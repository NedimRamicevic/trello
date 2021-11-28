import './App.css'
import Containers from './Components/Containers'
import {ItemContextProvider} from './Contexts/ItemContextProvider'


function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <Containers/>
      </ItemContextProvider>
    </div>
  );
}

export default App;
