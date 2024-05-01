"use client"
import { useState } from 'react';
import './B.css'
const B=()=>{
    const [loc,setLoc]=useState("")
    return (
        <div>
            <h1>B : <input onChange={(e)=>setLoc(e.target.value)}/></h1>
            <button onClick={()=>alert(loc)}>B Component</button>
        </div>
    )
}

export default B;