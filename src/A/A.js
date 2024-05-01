"use client"

import { useState } from 'react'
import './A.css'

const A=()=>{
    const [name,setName]=useState('')
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    const clickHandler=()=>{
        alert(name)
    }
    return (
        <div>
            <h1>A : <input onChange={handleChange}/></h1>
            <button onClick={clickHandler}>A Component</button>
        </div>
    )
}
export default A