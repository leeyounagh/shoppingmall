
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItems } from '../../_actions/User_action';
import UserCardBlock from './Sections/UserCardBlock';
import { removeCartItem } from '../../_actions/User_action';
const CartPage = (props) => {

    let cartItems = []
    const dispatch =useDispatch()
    const [Total,setTotal]= useState(0)
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
    }
   
    let removeFromCart = (productId) =>{
          dispatch(removeCartItem(productId))
    }
    return (
        <div className="UserCartPosition"style={{width:'85%',margin:'3rem auto'}}>
            CartPage
            <UserCardBlock
            products={props.user.cartDetail} removeItem={removeFromCart}></UserCardBlock>
            <div style={{marginTop:'3rem'}}>
               <h2>Total Amount: ${Total}</h2>
            </div>
        </div>
    );
};

export default CartPage;