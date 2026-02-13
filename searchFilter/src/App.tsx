import { useState } from 'react'
import './App.css'

function App() {
  const [entry, setEntry] = useState("")
  const data: string[] = ['Apple', 'Grapes', 'Orange', 'Mango', 'Kiwi', 'Guava', 'Papaya', 'Lemon'];

  return (
    <div>
      <div>
        <h2 style={{ color: 'white' }}>Fruit search filter</h2>
        <input type="text" value={entry} onChange={(e) => setEntry(e.target.value)} />  
      </div>
      <div style={{height:'300px'}}>
        {entry === "" ?
          data.map((d) => <h3>{d}</h3>) :
          data.filter((d)=>d.toLowerCase().includes(entry)).map((d,index)=><h3 key={index}>{d}</h3>)
        }
      </div>
    </div>
  )
}

export default App

