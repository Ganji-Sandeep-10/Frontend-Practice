import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react';


function App() {
  const url = 'https://dummyjson.com/products';
  const Limit=10;
  const [recived,setRecived]=useState([]);
  const [cpage,setCpage]=useState(1);
  const [total,setTotal]=useState(0);
  
  async function fetchData(){
    try{
      const response = await axios.get(`${url}?limit=${Limit}&skip=${(cpage-1)*Limit}`);
      setRecived(response.data.products);
      setTotal(response.data.total)
    }catch(err){
      console.log("Failed to fetch Data...")
    }
  }

  const pages=[];
  for(let i=1;i<=Math.ceil(total/Limit);i++)pages.push(i);
  
  useEffect(()=>{fetchData()},[cpage])
  
  return (
    <div>
      <h2>Pagination component</h2>
      <div style={{ width: 450,height:570,backgroundColor:'white',color:'black', }}>
        {recived.map((p) => (
          <div key={p.id} style={{ display: 'flex', justifyContent: "space-between",border:'1px solid black',paddingLeft:20,paddingRight:20 }}>
            <p style={{}}>{p.title}</p>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        {pages.map((e) => <p key={e}  onClick={()=>setCpage(e)}>{e}</p>)}
      </div>
      <h4>current page is {cpage}</h4>
    </div>
  )
}

export default App

