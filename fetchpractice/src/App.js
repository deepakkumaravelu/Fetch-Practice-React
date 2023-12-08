import Axios from "axios";
import {useEffect,useState} from 'react';


function App(){
  const[catFact,setCatFact]=useState("");
  const fetchCatFact=()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact);
    });
  };
  useEffect(()=>{fetchCatFact();},[]);
  return(
    <div id="demo">
      <button onClick={fetchCatFact}>Generate cat fact</button>
      <p>{catFact}</p>
    </div>
  )
}
export default App;