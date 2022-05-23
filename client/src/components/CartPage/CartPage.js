
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItems } from '../../_actions/User_action';
import UserCardBlock from './Sections/UserCardBlock';
import { removeCartItem,onSuccessBuy } from '../../_actions/User_action';
import { Empty } from 'antd';
import Paypal from '../utils/PayPal';
import { Result, Button } from 'antd';


const CartPage = (props) => {

    let cartItems = []
    const dispatch =useDispatch()
    const [Total,setTotal]= useState(0)
    const [ShowTotal,setshowTotal] =useState(false)
    const [showSuccess,setshowSuccess] =useState(false)
    useEffect(()=>{
        //리덕스 user state안의 cart안에 상품이 들어있는지 확인
      if(props.user.userData&& props.user.userData){
          if(props.user.userData.cart.length>0){
            props.user.userData.cart.forEach(item => {
                cartItems.push(item.id)
            });
            dispatch(getCartItems(cartItems,props.user.userData.cart))
            .then(response=>calculateTotal(response.payload))

          }
      }
    },[props.user.userData])

    let calculateTotal = (cartDetail) =>{
       let total =0;

       cartDetail.map(item=>{
        total += parseInt(item.price,10) *item.quantity
       })
       setTotal(total)
       setshowTotal(true)
    }
   
    let removeFromCart = (productId) =>{
          dispatch(removeCartItem(productId))
          .then(response=>{
              if(response.payload.productInfo.length<=0){
                setshowTotal(false)
              }
          })
    }

    const transectionSuccess = (data) =>{
              dispatch(onSuccessBuy({
                  paymentData:data,
                  cartDetail:props.user.cartDetail
              }))
              .then(response=>{
                   if(response.payload.success){
                       setshowTotal(false)
                       setshowSuccess(true)
                   }
              })
    }
    return (
        <div >
   <div className="UserCartPosition"style={{margin:'3rem auto' }}>
           

           <UserCardBlock
           products={props.user.cartDetail} removeItem={removeFromCart}></UserCardBlock>
         
          
       </div>
      
       <>
        {ShowTotal? <div style={{marginTop:'3rem'}}>
         <h2>Total Amount: ${Total}</h2>
      </div>:showSuccess?
       <Result
       status="success"
       title="Successfully Purchased Items" />:
      <div className="EmptyPosition"style={{marginTop:'3rem'}}><Empty description={false}/></div>}
       </>
       {ShowTotal&&
       <div style={{position:'relative',top:'80%'}}>
            <Paypal
        
        total={Total}
         onSuccess ={transectionSuccess}></Paypal>
       </div>
       
       }
        </div>
        
       
       
        
    );
};

export default CartPage;