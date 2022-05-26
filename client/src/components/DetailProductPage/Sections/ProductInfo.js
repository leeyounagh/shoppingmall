import React from 'react';
import { Descriptions, Button } from 'antd';
import {useDispatch} from 'react-redux'
import { addtoCart } from '../../../_actions/User_action';

const ProductInfo = (props) => {

    const dispatch = useDispatch()

    const ClickHandler = () =>{
         //필요한정보를 카트필드에 넣어준다.

         dispatch(addtoCart(props.detail._id))
    }
    const numbertostring = (price) =>{
     
        let changednumber = price.toLocaleString('ko-KR');

        return changednumber
    
}

  
    return (
        <div>
              <Descriptions title="Product Info" bordered>
    <Descriptions.Item label="Price">{numbertostring(Number(props.detailPrice))}</Descriptions.Item>
    <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
    <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
    <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
   
   
   
  </Descriptions>

    <br/>
    <br/>
    <br/>
    <div style={{display:'flex', justifyContent:'center'}}>
        <Button size='large' shape='round' type='danger' onClick={ClickHandler}>
           Add to Cart
        </Button>

    </div>
        </div>
    );
};

export default ProductInfo;