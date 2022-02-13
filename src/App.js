import {useState} from 'react'
import Tasks from './Components/Tasks';
import { Add } from './Components/Add';
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
        <Tasks/>
      </div>
    </div>
  );
}

export default App;
