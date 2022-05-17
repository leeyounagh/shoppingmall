import React from 'react';


import {  useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import axios from 'axios'


const RightMenu = (props) => {
  const NaviGate = useNavigate()
    const user =useSelector(state =>  state.user)

   
    const logoutHandler = () => {
      axios.get('api/users/logout').then(response => {
        if (response.status === 200) {
          NaviGate("/login");
        } else {
          alert('Log Out Failed')
        }
      });
   
      };
      if (user.userData && !user.userData.isAuth) {
        return (
            <span>
           <a href="/login">Signin</a>
         
          <a href="/register">Signup</a>
            </span>
         
          
        )
      } else {
        return (
          
              <span>
                 <a href='/product/upload'>upload</a>
                 <a onClick={logoutHandler}>Logout</a>
              </span>
            
           
          
          
        )
      }

 

    }
export default RightMenu;