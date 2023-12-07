import {useEffect, useState} from 'react';
import './App.css';
function App(){
  const[imgurl,setImgurl]=useState('');
  useEffect(()=>{
    const fetchcatimage=async()=>{
        const response=await fetch('https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=YOUR_API_KEY');
        const data=await response.json();
        setImgurl(data[0].url);
    }; fetchcatimage();},[]);
  return(
    <div className='App' >
    {imgurl && <img src={imgurl} alt="Cat" className="imm" />}
    </div>
  );
}
export default App;