import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Navigate, useNavigate, useParams } from "react-router-dom";
import { auth } from "../_actions/User_action";

export default function(SpecificComponent ,option,adminRoute =null){
           //null => 아무나 출입가능한페이지
           //true => 로그인한 유저만 출입이 가능한페이지
           //false => 로그인한 유저는 출입 불가능한페이지
           
             
        function AuthenticationCheck(props){
            let user = useSelector(state=>state.user)
            const dispatch = useDispatch();
            const NaviGate =useNavigate();
            const {register} =useParams()
            const memorizenavigate =useCallback(()=>{
              return  NaviGate()
            },[NaviGate])
            useEffect(()=>{
                dispatch(auth()).then((response) =>{
                   if(!response.payload.isAuth){
                      
                       if(option==true){
                      
                       return null
                       
                        
                       }
                       
                    }
                    
                    //    else {
                    //     //로그인 한 상태 
                    //     // if (adminRoute && !response.payload.isAdmin) {
                    //     //     NaviGate('/')
                    //     // } else {
                    //     //     if (option === false){
                    //     //     NaviGate('/')
                    //     //     }
                    //     // }
                        
                    // }
                   
                   }
                  
                )
                // return() => clearInterval(dispatch);
            },[dispatch,memorizenavigate])
  
            return ( <SpecificComponent  {...props} user={user} />);
        }
      
        
        return AuthenticationCheck()
    
}