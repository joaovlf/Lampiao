import React,{useEffect, useState} from 'react'
import Error from "../../components/error"
import Input from "../../components/input"
import Btn from "../../components/Btn"
import './Form.css'

const Form3 = ()=>{
 
    const [formValues,setformValue] = useState({nome:"",email:"",instagram:"",fone:""})
    const [err,setErr] = useState(false)
    const [count,setCount] = useState(0)
    
    const handleChange = async(e)=>{ 
    formValues[e.target.name] = e.target.value
    setformValue(formValues)
    setErr(false)
    }

    const handleSubmit = async(e)=>{
        return e.preventDefault(),
        console.log(formValues)

}

useEffect(()=>{
    const btnSend = document.querySelector("#btnSend")
    const divs =[ 
        document.querySelector("#nome"),
        document.querySelector("#email"),
        document.querySelector("#instagram"),
        document.querySelector("#fone"),        
]
    
    divs.forEach(item => {
    if(item.id == "nome"){
        btnSend.style.display="none"
        item.style.display="block"
        item.lastChild.focus()
        
    }else{
        item.style.display="none"
    }
    
});
  },[]);




  const ChangeBol = (e)=>{
    const divs = e.target.form.children
    const btnSend = divs.btnSend
    const btn = divs.btn
   console.log(count)
        switch (count) {
            case 0:
            if(divs[count].children[1].value !== ""){
                divs[count].style.display="none"
                divs[count+1].style.display="block"
                divs[count+1].lastChild.focus()                
            }else{
                return setErr(true),setCount(0),divs[count].lastChild.focus()                
            }
                break;
            case 1:
                if(divs[count].children[1].value !== ""){
                    divs[count].style.display="none"
                    divs[count+1].style.display="block"
                    divs[count+1].lastChild.focus()
                }else{
                    return setErr(true),setCount(1),divs[count].lastChild.focus()
                }
                break;
            case 2:
                if(divs[count].children[1].value !== ""){
                    
                    divs[count].style.display="none"
                    divs[count+1].style.display="block"
                    divs[count+1].lastChild.focus()
                }else{
                    return setErr(true),setCount(2),divs[count].lastChild.focus()
                }
                break;
                case 3:
                if(divs[count].children[1].value !== ""){
                    divs[count].style.display="none"
                    divs[count+1].style.display="block"
                    divs[count].lastChild.focus()
                    setCount(count+1)
                    btn.style.display = "none"
                    btnSend.style.display="flex"
                     
                }else{
                    return setErr(true),setCount(3),divs[count].lastChild.focus()
                }
                break;
            default:
                
                break;
        }
        setCount(count+1)
  }
    

const handleKeyDown = (e)=>{
    if (e.key === 'Enter'){
        console.log(ChangeBol(e))
    }
}

     return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <Input onKeyDown={handleKeyDown} name ="nome" id="nome" type="text" label="Nome" onChange={handleChange}/>
                
                <Input onKeyDown={handleKeyDown} name ="email" id="email" label="Email" type="email" onChange={handleChange}/>
               
                <Input onKeyDown={handleKeyDown}  name ="instagram" id="instagram" label="Instagram" type="text" onChange={handleChange}/>

                <Input onKeyDown={handleKeyDown}  name ="telefone" id ="fone"label="Telefone" type ="text" onChange={handleChange}/>
                <br/>
                
                
                <Btn  className="btn"  type="button" id="btn"  onClick={ChangeBol}>Ok</Btn>
                
                <br/> <br/>
                <Error error={err} name ="valor no campo que seja" />
                <Btn id ="btnSend" className="btnSend" type="submit">Enviar</Btn>             
                
            </form >
        </div>
    )
}
export default Form3