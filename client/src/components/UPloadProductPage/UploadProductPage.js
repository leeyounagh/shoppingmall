
import React, { Fragment, useState } from 'react';
import { Typography,Button,Form,Input } from 'antd';
import FileUpload from '../utils/FileUpload';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {PlusOutlined} from '@ant-design/icons'
import './Upload.css'
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
           <div style={{background:'#E2C2C6',width:'100%',height:'100%',background:'#E2C2C6',
           position:'fixed'}}>
      
                   {/* <Title className="uploadTitle"level={2}>여행상품 업로드</Title> */}
           

           <Form  className='uploadTitle' style={{maxWidth:'700px',margin:'2rem auto'}}
            onSubmitCapture={submitHandler}>
                <div style={{position:'absolute',top:'-50px',left:'270px',fontSize:'25px',
             color:'#6D184B' }}>상품 업로드</div>
              <div style={{position:'absolute',top:'80px',left:'120px',fontSize: '50px',color:'#b9929f',
               color:'#6D184B'}}> <PlusOutlined /></div> 
             <FileUpload style={{color:'#b9929f'}}  refreshFunction={updateImages}></FileUpload>
             
               <br>
               </br>
               <label style={{color:'#6D184B'}}>이름</label>
               <input style={{marginLeft:'10px' ,width: '600px',color:'#6D184B'}}onChange={titleChangeHandler} value={title} ></input>
               <br>
               </br>
               <label style={{ marginTop:"20px",color:'#6D184B'}}>설명</label>
               <textarea style={{width:'700px',height:'80px',backgroundColor:"#b9929f",
                border:"none",color:'#6D184B'}}onChange={descriptionChangeHandler} value={Descriptoion}>  </textarea>
               <br>
               </br>
               <label style={{color:'#6D184B'}}>가격($)</label>
               <input  style={{marginLeft:'10px',width:'100px',color:'#6D184B'} }type="number" onChange={priceChangeHandler} value={Price}></input>
               <br>
               </br>
               <select  style={{marginTop:'10px',marginBottom:'10px',backgroundColor:"#b9929f",
                  border:'none',color:'#6D184B'}}onChange={ContinetChangeHandler} value={continent}>
                   {Continents.map((item)=>{
                     return(
                        <option key ={item.key} value={item.key}>{item.value}</option>
                         )  
                    
                   })}
               
               </select>
               <br>
               </br>
               <Button className="confirmstyle button btnPush btnPurple"style={{backgroundColor:"#b9929f",
                  border:'none',color:"#6D184B"}} htmlType='submit'  >
                   확인
               </Button>

           </Form >
           </div>
    );
};

export default UploadProductPage;