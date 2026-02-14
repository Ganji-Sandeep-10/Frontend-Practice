import './App.css';
import {useEffect, useState} from 'react';

function App(){
  const [current,setCurrent]=useState(0);
  const [hover,setHover]=useState(false);
  const data = [
    "https://images.pexels.com/photos/29107918/pexels-photo-29107918.jpeg",
    "https://images.pexels.com/photos/13728002/pexels-photo-13728002.jpeg",
    "https://images.pexels.com/photos/12154116/pexels-photo-12154116.jpeg",
    "https://images.pexels.com/photos/27240568/pexels-photo-27240568.jpeg",
    "https://images.pexels.com/photos/34384034/pexels-photo-34384034.jpeg",
    "https://images.pexels.com/photos/29298929/pexels-photo-29298929.jpeg",
    "https://images.pexels.com/photos/992066/pexels-photo-992066.jpeg"
  ]
  function handlePrev(){
    setCurrent(v => v===0?data.length-1:v-1);
  }
  function handleNext(){
    setCurrent(v=>(v+1)%data.length);
  }
  useEffect(()=>{
    if(hover)return;
    const timer=setInterval(() => {
      setCurrent(v => (v + 1) % data.length);
    },3000);

    return ()=>clearInterval(timer);
  },[hover])
  return(
    <div style={{width:300}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>

      <img src={data[current]} alt="slide" style={{width:'100%',height:400}}/>
      
      <div className="controls">
        <button className="arrow left" onClick={handlePrev}>←</button>

        <div className="dots">
          {data.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`dot ${current === i ? "active" : ""}`}
            />
          ))}
        </div>

        <button className="arrow right" onClick={handleNext}>→</button>
      </div>

    </div>
  )
}

export default App;