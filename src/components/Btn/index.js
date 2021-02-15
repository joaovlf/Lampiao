import React from "react"
import './Btn.css'

const Btn=(props)=>{
        
    return(
    <>
    <button  className={props.className} type={props.type}id={props.id} onClick={props.onClick}>{props.children}</button>
    </>
    )
}
export default Btn
