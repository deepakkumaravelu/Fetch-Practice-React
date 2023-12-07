import {useEffect, useState} from 'react';
import './App.css';
function App(){
 const[m,setM]=useState("");
 fetch(`http://www.omdbapi.com/?s=leo&apikey=383bfd25`)
 .then((res)=>res.json())
 .then((data)=>console.log(data));
  return(
    <div className='App' >
    <form>
    
    <label>input movie name</label>
    <input onChange={(e)=>setM(e.target.value)}></input>
    
    </form>
    </div>
  );
}
export default App;