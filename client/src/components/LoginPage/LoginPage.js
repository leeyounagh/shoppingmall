import {useDispatch} from 'react-redux'
import { loginUser } from '../../_actions/User_action';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss' ;
import RightMenu from '../NavBar/Section/RightMenu';

const LoginPage = (props) => {
   const dispatch =useDispatch()
   const NaviGate = useNavigate()
    const [Email,setEmail] =useState("")
    const [Password,setPassword] =useState("")
 

  
  
    const onEmailHandler = (event) =>{
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }
  
        dispatch(loginUser(body))
            .then(async response => {
                if (await response.payload.loginSuccess) {
                    NaviGate('/');
                    <RightMenu loginSuccess={response.payload.loginSuccess}></RightMenu>
                   
                } else {
                    alert('Error˝')
                }
            })


    }

    // useEffect(()=>{
    //     dispatch()
    // },[dispatch])
  
    const NavigetRegister = () =>{
        return(
            NaviGate('/register')
        )
    }
    return (
        <div style={{width:'100%',height:'800px',position:'fixed',background:'#CBC0D3'}}>
        <div className='container' >
            <div className='welcome'>
            <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            ,  height: '550px'
        }} className="pinkbox ">
            
            <form 
            onSubmit={onSubmitHandler}>
             
               <h2 style={{zIndex:'5',color:'white',position:'absolute',
               top:'100px',fontWeight:'600',left:'100px',fontSize:'35px'}}>LOGIN</h2>
               
                <input className='Login_input' style={{zIndex:'5',fontSize:'15px',fontWeight:'600'}} type="email" value={Email} 
                placeholder='e-mail'onChange={onEmailHandler}/>
                
                <input className='Login_input' 
                 placeholder='password'style={{zIndex:'5',fontSize:'15px',fontWeight:'600'}} type="password" value={Password} onChange={onPasswordHandler}/>
                <br/>
                <button  className='submit Login_button LG_btn'style={{zIndex:'5'}} type='submit'>
                    login
                </button>
                <div class="rightbox">
                <h2 class="title" style={{position:'absolute',top:'-110px',left:'240px'}}>vintage</h2>
                   <img className="flower" style={{position:'absolute',top:'-30px',left:'230px'}}src="https://preview.ibb.co/jvu2Un/0057c1c1bab51a0.jpg"/>
                    <p className="right_text"style={{position:'absolute',top:'90px',left:'230px',whiteSpace: 'nowrap'}} class="account">don't have an account?</p>
                 <button style={{position:'absolute',top:'130px',left:'250px',width:'100px'}} className="button LG_btn Login_button "
                 onClick={NavigetRegister}>sign up</button>
                 </div>

             
            
            </form>

            

        </div>
        
            </div>

                </div>
       
        </div>
       
      
    );
   
   
};

export default LoginPage;