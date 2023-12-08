import axios from "axios";
import {useState } from "react";

function AX1(){
    const[geneexcuse,setExcuse]=useState("");
    
    const fetchAge=(excuse)=>{
        axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res)=>{console.log(res.data[0].excuse);
    setExcuse(res.data[0].excuse);});
    };
    function Party(){
        fetchAge("party");
    }
    function Fam(){
        fetchAge("family");
    }
    function Off(){
        fetchAge("office");
    }
    return(
        <div>
        <h1>Generate Excuse</h1>
        
        <button onClick={Party}>Party</button>
        <button onClick={Fam}>Family</button>
        <button onClick={Off}>Office</button>
        <p>{geneexcuse}</p>
        </div>
    );
}
export default AX1;