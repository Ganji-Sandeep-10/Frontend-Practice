import { useState } from 'react'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'


import './App.css'

function App() {
  const [current,setCurrent]=useState<'Home' | 'About' |'Contact'>('Home');
  const components={
    Home:<Home/>,
    About:<About/>,
    Contact:<Contact/>
  }

  return (
    <div>
      <h2>this is dum shit website</h2>
      <div style={{display:'flex',justifyContent:'space-between',gap:'20px'}} >
        <p style={{border:"2px solid white",padding:"10px 20px"}} onClick={()=>setCurrent('Home')}>Home</p>
        <p style={{ border: "2px solid white", padding: "10px 20px" }} onClick={() => setCurrent('About')}>About</p>
        <p style={{ border: "2px solid white", padding: "10px 20px" }} onClick={() => setCurrent('Contact')}>Contact</p>
      </div>
      <div>
        {components[current]}
      </div>
    </div>
  )
}

export default App

