import React from "react"
import "./Input.css"

const Input = (props)=>{

    const handleKey = (e)=>{
        if(e.key === 'Enter'){
            e.preventDefault()
            
        }
        
    }

    return(
        <div id={props.id}>
         <label>{props.label}</label>   
        <input onKeyPress={handleKey} onKeyDown={props.onKeyDown} name={props.label}type ={props.type} onChange={props.onChange} onSubmit={props.onSubmit}/>
        </div>
    )
}


export default Input