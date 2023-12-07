import {useEffect, useState} from 'react';
import Axios from "axios";
import './App.css';
function App(){
 const[m,setM]=useState("");
 const[year,setYear]=useState("");

 Axios.get(`http://www.omdbapi.com/?s=${m}&apikey=383bfd25`).then((res)=>{
  console.log(res.data.Year);
 })
  return(
    <div className='App' >
    <form onSubmit={(e)=>e.preventDefault()}>
    <label>input movie name</label>
    <input type="text" onChange={(e)=>setM(e.target.value)}></input>
    <input type="submit" value="Save"></input>
    </form>
    
    </div>
  );
}
export default App;