import React,{useEffect} from "react"
import "./error.css"



const Error = (props)=>{

    
    const CheckError = (e) =>{
        useEffect(()=>{
            let err = document.querySelector("#error")
            if(e){
                err.style.display = "block"
            }
            if(e == false){
                err.style.display = "none"
            }
        })        
    }
    
    return (
        <div>
        <p className ="error" id="error" error={CheckError(props.error)}>Digite um {props.name} válido</p>
        </div>
    )
    
}

export default Error