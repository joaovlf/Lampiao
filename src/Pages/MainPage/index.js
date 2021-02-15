import React from  'react';
import Logo from '../../assets/img/logo-lampiao-branca.png';
import './MainPage.css';
import Btn from '../../components/Btn'
import {Link} from 'react-router-dom'
const MainPage = ()=>{
    return(
        <>  
            <div className="img"><img src={Logo}/></div>
            
            <h1>
                Seja bem Vindo
            </h1>
            
            <Btn className="btn" type="btn">
            <Link to ='/form'>Continuar para cadastro</Link>
            </Btn>
            
        </>
    )
}


export default MainPage;