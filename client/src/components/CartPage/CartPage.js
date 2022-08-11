import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeCartItem,onSuccessBuy } from '../../_actions/User_action';
import { getCartItems } from '../../_actions/User_action';
import UserCardBlock from './Sections/UserCardBlock';
import { Empty, Result } from 'antd';
import Paypal from '../utils/PayPal';

function CartPage(props) {
    const dispatch = useDispatch();

    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)

    useEffect(() => {

        let cartItems = []
        //리덕스 User state안에 cart 안에 상품이 들어있는지 확인 
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                })
                dispatch(getCartItems(cartItems, props.user.userData.cart))
                    .then(response => { calculateTotal(response.payload) })
            }
        }
    }, [props.user.userData])


    let calculateTotal = (cartDetail) => {
        let total = 0;

        cartDetail.map(item => {
            total += parseInt(item.price, 10) * item.quantity
        })

        setTotal(total)
        setShowTotal(true)

    }


    let removeFromCart = (productId) => {

        dispatch(removeCartItem(productId))
            .then(response => {

                if (response.payload.productInfo.length <= 0) {
                    setShowTotal(false)
                }

            })

    }

    const transactionSuccess = (data) => {
        dispatch(onSuccessBuy({
            paymentData: data,
            cartDetail: props.user.cartDetail
        }))
            .then(response => {
                if (response.payload.success) {
                    setShowTotal(false)
                    setShowSuccess(true)
                }
            })
    }

    const numbertostring = (price) =>{
     
        let changednumber = price.toLocaleString('ko-KR');

        return changednumber
    
}

    return (
        <div  className="UserCartPosition" style={{ width: '85%',marginLeft:'150px' }}>
            <h1 style={{position:'relative', top:'100px',left:'0px'}}>My Cart</h1>
         <div  >


         <div>
                <UserCardBlock products={props.user.cartDetail} removeItem={removeFromCart} />
            </div>
             <div style={{position:'relative',left:'5%',marginTop:'50px',left:'0px',top:'70px'}}>
             {ShowTotal ?
                <div style={{ marginTop: '3rem'}}>
                    <h2>Total Amount: ${numbertostring(Total)}</h2>
                </div>
                : ShowSuccess ?
                    <Result
                        status="success"
                        title="Successfully Purchased Items"
                    />
                    :
                    <>
                        <br />
                        <Empty description={false} />
                    </>
            }


            {ShowTotal &&
                <Paypal
                    total={Total}
                    onSuccess={transactionSuccess}
                />}

             </div>
         </div>
           
        

        </div>
    )
}

export default CartPage