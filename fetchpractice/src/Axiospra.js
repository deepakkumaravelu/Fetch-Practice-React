import React, { useEffect, useState } from 'react'
import Axios from 'axios';
function Axiospra() {
    const[userId,setUserId]=useState(0);

    function axiosg(){
        Axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{setUserId(res.data[0].title);
    console.log(res.data[0].title)});
    }
    function axiosh(){
      Axios.post("https://jsonplaceholder.typicode.com/posts",{userId:30,id:31,title:"rishi oru paithiyam hahaha"}).then((res)=>{console.log(res.data[0].title)});
  }
    useEffect(()=>{axiosh()},[]);

  return (
    <div>
   <p>{userId}</p>
    
    </div>
  )
}

export default Axiospra