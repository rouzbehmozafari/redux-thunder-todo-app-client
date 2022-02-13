import {useState} from 'react'
import { Add } from './Components/Add';
import { List } from './Components/List';
import './Styles/Style.css'
function App() {
  const [isAdd,setIsAdd] = useState(false)
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="header">
          <h1>Task Tracker</h1>
          <div style={isAdd? {backgroundColor : 'red'}: {backgroundColor:'green'}} 
          className="addClose" 
          onClick={()=> setIsAdd(!isAdd)} >
            {!isAdd ? 'Add':'Close'}</div>
        </div>
        {isAdd && <Add/>}
        <List/>
      </div>
    </div>
  );
}

export default App;
