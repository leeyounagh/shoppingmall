import React from 'react';

import { Badge, Avatar,Menu  } from 'antd';
import {  useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {ShoppingCartOutlined} from '@ant-design/icons'
import MainPage from '../../LandingPage/MainPage'

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
          <Menu mode={props.mode}>
          <Menu.Item key="mail">
            <a href="/login">Signin</a>
          </Menu.Item>
          <Menu.Item key="app">
            <a href="/register">Signup</a>
          </Menu.Item>
          <Menu.Item key="main">
            <a href="/main">Products</a>
          </Menu.Item>
        </Menu>
         
         
          
        )
      } else {
        return (
          
          <Menu mode={props.mode}>
        <Menu.Item key="history">
        
          <a href="/history">History</a>
        </Menu.Item>
        <Menu.Item key="main">
            <a href="/main">Products</a>
          </Menu.Item>

        <Menu.Item key="upload">
          <a href="/product/upload">Upload</a>
        </Menu.Item>

        <Menu.Item key="cart" style={{  position:'relative',top:'10px',paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" className="head-example" style={{ marginRight: -22, color: '#667777' }} >
              
              <ShoppingCartOutlined type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }}/>
            </a>
          </Badge>
        </Menu.Item>

        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
            
           
          
          
        )
      }

 

    }
export default RightMenu;