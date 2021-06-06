import React, {useState} from 'react'
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [Age, setAge] = useState()
  const [Height, setHeight] = useState()
  const [SuperPower, setSuperPower] = useState("")
  const [Displayinfo, setDisplayinfo] = useState(false)

  
  
  return (
    <div className="App">
      <h1>Build a "HERO"</h1>
      <div>
        <label>Name:</label>
        <input type="text" style={{margin:10}} onChange={(event)=>{
          setName(event.target.value)
        }}/>
        <label>Age:</label>
        <input type="number" style={{margin:10}} onChange={(event)=>{
          setAge(event.target.value)
        }}/>
        <label>Height:</label>
        <input type="number" style={{margin:10}} onChange={(event)=>{
          setHeight(event.target.value)
        }}/>
        <label>SuperPower:</label>
        <input type="text" style={{margin:10}} onChange={(event)=>{
          setSuperPower(event.target.value)
        }}/>
      </div>
      <button onClick={()=>{
           setDisplayinfo(true);
      }}>Display Info</button>
      <div>
        
        {Displayinfo && (
          <div>
          <h1>Hero Info</h1>
          <ul>
            <li>Name: {name}</li>
            <li>Age: {Age}</li>
            <li>Height: {Height}</li>
            <li>SuperPower: {SuperPower}</li>
          </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
