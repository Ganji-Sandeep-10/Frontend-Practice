import { useState } from 'react'
import './App.css'

function App() {
  const [flag, setFlag] = useState(false)
  const [c,setC]=useState(0);
  const [toogle,setToogle]=useState(false);
  const [like,setLike]=useState(false)
  return (
    <div>
      <div className='menuContainer'>
        <h2 onClick={() => setFlag(prev => !prev)}>menu</h2>
        {flag && (
          <div className='dropDown'>
            {[1, 2, 3, 4].map((e) => (
              <h4 key={e} >item {e}</h4>
            ))}
          </div>
        )}
      </div>
      
      <p>
        We start celebrating Diwali a few days in advance by thoroughly cleaning and decorating our home. Every corner is dusted, polished, and adorned with vibrant decorations. We create beautiful rangoli designs at the entrance, hang colorful torans, and place fresh flowers to welcome positivity and happiness. On the main day, everyone in the family wears new clothes, symbolizing a fresh start and good fortune.

        Before the evening celebrations, we prepare a variety of delicious sweets such as laddoos, barfis, and halwa, along with savory snacks. The highlight of the day is performing Lakshmi Puja to seek the blessings of Goddess Lakshmi and Lord Ganesha for wealth, health, and prosperity. After the puja, we light hundreds of diyas and candles inside and outside our home, illuminating the surroundings and creating a magical atmosphere.

        Later, we enjoy bursting crackers and fireworks with our neighbors and friends. Exchanging gifts and sweets strengthens the bonds of love and togetherness. The entire neighborhood sparkles with lights, laughter, and happiness. Diwali brings joy, unity, and a sense of community, making it my favorite festival. I always feel grateful and happy while celebrating Diwali with my family.
      </p>

      <div>
        <progress value={c} max={5} style={{width:'100%'}}/>
        <div style={{display:'flex',justifyContent:'space-between',padding:10}}>
          <button onClick={() => setC(prev => Math.min(prev + 1, 5))}>Next</button>
          <button onClick={() => setC(prev => Math.max(prev - 1, 0))}>Back</button>
        </div>
      </div>
      
      <div style={{padding:100,backgroundColor:toogle?'white':'red'}}>
        <button onClick={() => setToogle(prev=>!prev)}>Toggle</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center",cursor:"pointer"}}>
        {like ? 
          <h4 onClick={() => setLike(prev => !prev)} style={{ fontSize: 40,width:60 }} >👍</h4> 
          : 
          <h4 onClick={() => setLike(prev => !prev)} style={{ fontSize: 40, width:60 }}>❤️</h4>
        }
      </div>
    </div>
  )
}

export default App
