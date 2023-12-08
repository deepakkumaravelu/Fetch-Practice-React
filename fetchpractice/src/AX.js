import axios from "axios";
import { useEffect, useState } from "react";

function AX(){
    const[age,setAge]=useState(0);
    const[name,setName]=useState("");
    const fetchAge=()=>{
        axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{console.log(res.data.age);
    setAge(res.data)})
    }

    return(
        <div>
        <h1>Age predictor</h1>
        <input placeholder="enter you name" onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={fetchAge}>Predict age</button>
        <p>Your age is {age?.age}</p>
        </div>
    );
}
export default AX;