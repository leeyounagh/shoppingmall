import React, { useEffect, useState } from 'react';
import axios from 'axios'
import{Col,Card,Row} from 'antd'
import Meta from 'antd/lib/card/Meta';
import CheckBox from './Sections/CheckBox';
import ImageSliider from '../utils/ImageSliider';
import {continents,price} from './Sections/Datas'
import RadioBox from './Sections/RadioBox';
import SearchFeature from './Sections/SearchFeature';


const MainPage = (props) => {
    
   const [Products,setProducts] =useState([])
   const [Skip,setSkip] =useState(0)
   const [Limit,setLimit] =useState(8)
   const [PostSize, setPostSize] = useState(0)
   const [Filters,setFilters] =useState({constinents:[],
        price:[]})
        const [SearchTerm,setSearchTerm] = useState('')
     useEffect(()=>{
         let body ={
             skip:Skip,
             limit:Limit
         }
         getProducts(body)
           
     },[])
     

     const getProducts = (body) => {
        axios.post('/api/product/products', body)
            .then(response => {
                if (response.data.success) {
                    if (body.loadMore) {
                        setProducts([...Products, ...response.data.productInfo])
                    } else {
                        setProducts(response.data.productInfo)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert(" 상품들을 가져오는데 실패 했습니다.")
                }
            })
    }
    const loadMoreHanlder = () => {

        let skip = Skip + Limit
        let body = {
            skip: skip,
            limit: Limit,
            loadMore: true,
           
        }

        getProducts(body)
        setSkip(skip)
    }

     const renderCards =Products.map((product,index)=>{
         
           return (<Col lg={6} md={8} xs={24} key={index}>
            <Card 
             cover={<a href={`/product/${product._id}`}><ImageSliider images={product.images}></ImageSliider></a>}>
            
               <Meta
               style={{color:'black'}}
                title={product.title}
                description={`가격:${product.price}`}></Meta>
           </Card>
           </Col>
          )
     })
     function showFilterResults(Filters){
        let body = {
            skip: 0,
            limit: Limit,
            filters:Filters
        }
        getProducts(body)
        setSkip(0)
     }

     const handlePrice = (value) =>{
           const data =price;
           let array = [];

           for(let key in data){
               if(data[key]._id===parseInt(value,10)){
                      array =data[key].array
               } 
           }

           return array
     }

     const updateSearchterm = (newSearchTerm) =>{
       

        let body ={
            skip:0,
            limit:Limit,
            filters:Filters,
            searchTerm:newSearchTerm
        }
        setSkip(0)
        setSearchTerm(newSearchTerm)
        getProducts(body)
     }

    const handleFilters = (filter,category)=>{
         const newFilters = {...Filters}
         newFilters[category] =filter

         if(category === "price"){
             let priceValue = handlePrice(filter)
             newFilters[category] =priceValue
         }

         showFilterResults(newFilters)
         setFilters(newFilters)
    }
    return (
        <div className='Main_text'style={{background:'#E2C2C6',width:'100%',height:'1000px'}}>
               <div style={{
         width:'75%',margin:'3rem auto' ,background:'#E2C2C6'
        }} className="MainPosition">
           <div style={{textAlign:'center'}}>
           <h2>당신을 위한 It Item</h2> 
           </div>
          
           <Row gutter={[16,16]} className='Mainpanel-margin'>
                  <Col lg={12} xs= {24}>
                  <CheckBox list = {continents} handleFilters ={filter=>handleFilters(filter,"continents")}></CheckBox>
                  </Col>
                  <Col lg={12} xs={24}>
                      <RadioBox list={price} handleFilters ={filter=>handleFilters(filter,"price")}></RadioBox>
                  </Col>
             </Row>
           
       
           <div style={{display:'flex',justifyContent:'flex-end',margin:'1rem auto'}}>
           <SearchFeature
            refreshFunction={updateSearchterm}></SearchFeature>
           </div>
           
        

           <Row gutter={[16,16]}>
           {renderCards}
           </Row> 
           
           {PostSize >= Limit&&    <div style={{display:'flex',justifyContent:'center'}}>
              <button onClick={loadMoreHanlder}>더보기</button>
           </div>}
       
           

        

        </div>

        </div>
     
    );
};

export default MainPage;