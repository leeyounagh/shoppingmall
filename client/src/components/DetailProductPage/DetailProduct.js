import axios from 'axios';

import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { Row,Col } from 'antd';
const DetailProduct = (props) => {
    const {productId} = useParams()

    const [Product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                console.log('productId',response.data)
                setProduct(response.data[0])
            })
            .catch(err => alert(err))
    }, [])

    return (
        <div className="detailPosition" style={{sidth:'100%',padding:'3rem 4rem',background:'#E2C2C6'}}>
            <div style={{display:'flex',justifyContent:'center'}}>
                <h1>{Product.title}</h1>
            </div>
            <br/>
            <Row gutter={[16,16]}>
                <Col lg={12} sm={24}>
                <ProductImage detail={Product}></ProductImage>
                </Col>
              
                <Col lg={12} sm={24}>
                <ProductInfo detail={Product}></ProductInfo>
                </Col>
               
            </Row>
            
          

        </div>
    );
};

export default DetailProduct;