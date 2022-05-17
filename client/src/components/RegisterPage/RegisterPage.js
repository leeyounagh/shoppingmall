import {useDispatch} from 'react-redux'
import { registerUser } from '../../_actions/User_action';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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



    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{display:'flex',flexDirection:'column'}}
            onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}/>
                
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler}/>

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>

                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={onConfimPasswordHandler}/>
                <br/>
                <button type='submit'>
                    회원가입
                </button>
            </form>

            

        </div>
    );
};

export default RegisterPage;
