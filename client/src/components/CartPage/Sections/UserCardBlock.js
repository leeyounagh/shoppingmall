import React from 'react';
import "./UserCardBlock.css";
import {Button} from 'antd';
import Paypal from '../../utils/PayPal'

function UserCardBlock(props) {

    const renderCartImage = (images) => {
        if (images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

 const numbertostring = (price) =>{
     
         let changednumber = price.toLocaleString('ko-KR');

         return changednumber
     
 }


    const renderItems = () => (
        props.products && props.products.map((product, index) => (
        
            <tr key={index} style={{width:'500px'}}>
                <td>
                    <img style={{ width: '70px' }} alt="product"
                        src={renderCartImage(product.images)} />
                </td>
                <td>
                    {product.quantity} EA
                </td>
                <td>
             
                 $ {numbertostring(product.price)}
                </td>
                <td>
                    <Button style={{borderRadius:'10px'}}onClick={() => props.removeItem(product._id)}>
                        Remove 
                    </Button>
                </td>
            </tr>
        ))
    )


    return (
        <div >
            <table style={{position:'relative', top:'100px',left:'0px',marginTop:'80px'}}>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Quantity</th>
                        <th>Product Price</th>
                        <th>Remove from Cart</th>
                    </tr>
                </thead>

                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock