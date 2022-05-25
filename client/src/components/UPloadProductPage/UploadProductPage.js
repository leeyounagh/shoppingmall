
import React, { Fragment, useState } from 'react';
import { Typography,Button,Form,Input } from 'antd';
import FileUpload from '../utils/FileUpload';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {PlusOutlined} from '@ant-design/icons'
import './Upload.css'
// import '../LoginPage/Login.scss'
const {Title} = Typography;
const {TextArea} =Input;

const Continents = [
    {key:1,value:"상의"},
    {key:2,value:"하의"},
    {key:3,value:"원피스"},
    {key:4,value:"악세서리"},
    {key:5,value:"소품"},
    {key:6,value:"etc..."}
   
]
const UploadProductPage = (props) => {
    const [title,setTitle] = useState('')
    const [Descriptoion,setDescription] =useState('')
    const [Price,setPrice] =useState(0)
    const [continent,setContinent] =useState(1)
    const [Image,setImage] =useState([])
    const NaviGate = useNavigate()
    const titleChangeHandler = ( event) =>{
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event ) =>{
        setDescription(event.currentTarget.value)
    }

    const priceChangeHandler = (event ) =>{
        setPrice(event.currentTarget.value)
    }

    const ContinetChangeHandler = (event) =>{
        setContinent(event.currentTarget.value)
    }

    const updateImages =(newImages)=>{
            setImage(newImages)
    }

    const submitHandler = (event) =>{
        event.preventDefault();
         console.log(props.user.userData)
        
        if(!title || !Descriptoion || !Price || !continent
            ||!Image){
                return alert("모든값을 넣어 주셔야 됩니다.")
            }

            //서버에 채운 값들을 request로 보낸다.

            const body = {
                //로그인된 사람의 id
                writer: props.user.userData._id,
                title:title,
                description:Descriptoion,
                price:Price,
                images:Image,
                continents:continent
            }

            axios.post("/api/product",body)
            .then(response =>{
                if(response.data.success){
                    alert('상품 업로드에 성공했습니다.')
                    NaviGate('/')
                }else{
                    alert('상품 업로드에 실패했습니다.')
                }
            })
    }
    return (
        <div style={{background:'#EAC7CC'}}>
         <div style={{width:'700px',height:'830px',border:'1px solid lightgray',position:'absolute',
              left:'400px',marginTop:'100px',paddingTop:'0px', boxShadow:'2px 3px 5px 0px lightgray',marginBottom:'100px',
              
             }}>
      
                   {/* <Title className="uploadTitle"level={2}>여행상품 업로드</Title> */}
           

           <Form  className='uploadTitle' style={{maxWidth:'700px',margin:'2rem auto',}}
            onSubmitCapture={submitHandler}>
                <div style={{position:'absolute',top:'-110px',left:'300px',fontSize:'25px',
              }}>상품 업로드</div>
              <div style={{position:'absolute',top:'90px',left:'140px',fontSize: '50px',color:'lightgray'
              }}> <PlusOutlined /></div> 
             <FileUpload style={{color:'#b9929f'}}  refreshFunction={updateImages}></FileUpload>
             
               <br>
               </br>
               
               <Input style={{position:'absolute',left:'20px',top:'280px',marginLeft:'10px' ,width: '650px',marginTop:'20px',marginBottom:'10px',
              }} className="Input_style"placeholder="상품명" onChange={titleChangeHandler} value={title} ></Input>
               
              
               <TextArea style={{width:'700px',height:'80px',width: '650px',marginTop:'50px',
               position:'absolute',left:'30px',top:'330px',placehoderColor:'black'
               }}onChange={descriptionChangeHandler} value={Descriptoion}  placeholder="상품설명...">  </TextArea>
               <br>
               </br>
               <label style={{ position:'absolute',left:'30px',top:'470px'}}>가격($)</label>
               <Input  style={{marginLeft:'10px',width:'100px',
             position:'absolute',left:'20px',top:'500px'} }type="number" onChange={priceChangeHandler} value={Price}></Input>
               <br>
               </br>
               <select  style={{marginTop:'10px',marginBottom:'10px',
                 position:'absolute',left:'30px',top:'540px' }}onChange={ContinetChangeHandler} value={continent}>
                   {Continents.map((item)=>{
                     return(
                        <option key ={item.key} value={item.key}>{item.value}</option>
                         )  
                    
                   })}
               
               </select>
               <br>
               </br>
               <Button style={{ position:'absolute',left:'330px',top:'560px' }} className=" button LG_btn Login_button" htmlType='submit'  >
                   확인
               </Button>

           </Form >
           </div>
        </div>
          
    );
};

export default UploadProductPage;