import {useDispatch} from 'react-redux'
import { registerUser } from '../../_actions/User_action';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginPage/Login.scss' ;

const RegisterPage = (props) => {
    const dispatch =useDispatch()
    const NaviGate = useNavigate()
     const [Email,setEmail] =useState("")
     const [Password,setPassword] =useState("")
     const [Name,setName] =useState("")
     const [confirmPassword,setconfirmPassword] =useState("")
   
     const onEmailHandler = (event) =>{
         setEmail(event.currentTarget.value)
     }
     const onPasswordHandler = (event) =>{
         setPassword(event.currentTarget.value)
     }
     const onNameHandler = (event) =>{
        setName(event.currentTarget.value)
    }
   
    const onConfimPasswordHandler = (event) =>{
        setconfirmPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== confirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email: Email,
            password: Password,
            name: Name
        }
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    NaviGate('/login')
                } else {
                    alert("Failed to sign up")
                }
            })
    }

   useEffect(()=>{

   },[dispatch])

    return (
        <div style={{width:'100%',background:'#CBC0D3',height:'800px',position:'fixed'}}>
    <div  className='container' >
  <div className='welcome' style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
        }}>
            <form className="pinkbox "style={{display:'flex',
            padding:'50px',flexDirection:'column',top:'-50px'}}
            onSubmit={onSubmitHandler}>
        <h3 style={{color:'white',fontSize:'30px',whiteSpace: 'nowrap',
          }}>Create Your Account</h3>
		<p className='p_style' style={{color:'#87613d'}}>Just enter your email address<br/>
            and your password for join.
		</p>
               
                <input 
                style={{border:'none',marginBottom:'5px',color:'white',fontSize:'13px',fontWeight:'700'}}
                 className='w100 Login_input' type="email" value={Email} onChange={onEmailHandler} placeholder="Insert eMail"/>
                
             
                <input style={{border:'none',marginBottom:'5px',fontSize:'13px',fontWeight:'700'}}
                className='Login_input' type="text" value={Name} onChange={onNameHandler} placeholder="YourName"/>

                
                <input style={{border:'none',marginBottom:'5px',fontSize:'13px',fontWeight:'700'}  }
                 className='Login_input' type="password" value={Password} onChange={onPasswordHandler} placeholder="Password"/>

               
                <input  style={{border:'none',marginBottom:'5px',color:'white',fontSize:'13px',fontWeight:'700'}}
                className='Login_input' type="password" value={confirmPassword} onChange={onConfimPasswordHandler} placeholder="confirm PW"/>
                <br/>
                <button className='submit Login_button LG_btn' type='submit'>
                    회원가입
                </button>
            </form>
            <div class="rightbox">
                <h2 class="title" style={{position:'absolute',top:'-200px',left:'100px'}}>vintage</h2>
      <img className="flower" style={{position:'absolute',top:'-80px',left:'90px'}}src="https://preview.ibb.co/jvu2Un/0057c1c1bab51a0.jpg"/>
      <p className="right_text"style={{position:'absolute',top:'50px',left:'70px',whiteSpace: 'nowrap'}} class="account">Welcome to Vintage World!</p>
     
    </div>

            

        </div>
        </div>
        </div>
    
      
    );
};

export default RegisterPage;
