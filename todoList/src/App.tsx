import { useState } from 'react'
import './App.css'

function App() {
  const [entry, setEntry] = useState("");
  const [data, setData] = useState<string[]>([])
  function handleAdd() {
    if (entry.trim() == "") return;
    setData([...data, entry]);
    setEntry("");
  }
  function handleX(indx: number) {
    setData(prev=>prev.filter((_,i)=>i!=indx));
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div style={{display:'flex', justifyContent:"space-between",width:400}}>
        <input type="text" value={entry} onChange={e => setEntry(e.target.value)} style={{width:300,height:35,borderRadius:10}}/>
        <button onClick={handleAdd} style={{height: 40 }} >Add</button>
      </div>
      <ul>
        {data.map((d, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: "space-between" }}>
            {d} 
            <button style={{ height: 40, width: 40, color: 'red' }} onClick={()=>handleX(index)}>
              X
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
