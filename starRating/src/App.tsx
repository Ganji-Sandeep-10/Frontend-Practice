import { useState } from "react";

function App(){
  const [rating,setRating]=useState(3);
  return (
    <div>
      <h2>Welcome to Star Rating....</h2>
      {[1,2,3,4,5].map((i)=>(
        <span
          key={i}
          onClick={()=>setRating(i)}
          style={{color:rating>=i?'gold':'gray',cursor:'pointer'}}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default App;