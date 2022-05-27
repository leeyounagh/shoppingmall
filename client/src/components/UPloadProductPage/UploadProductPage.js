
import React, { Fragment, useState } from 'react';
import { Typography,Button,Form,Input } from 'antd';
import FileUpload from '../utils/FileUpload';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {PlusOutlined} from '@ant-design/icons'
import './Upload.css'
 import '../LoginPage/Login.scss'
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
        <div style={{background:'#CBC0D3',width:'100%',height:'1200px'}}>
            <div className='container'>
            <div className='update_backborder '>
                <div style={{position:"absolute", left:"750px",top:"30px"}}>
                    <h2 className='Update_title'>update</h2>
                    <img className="flower" style={{position:'absolute',top:'80px',left:'-10px'}}src="https://i.pinimg.com/564x/97/2e/a9/972ea9cffd95c3a26bc444e5f0df85fb.jpg"/>
                    <p className="right_text"style={{position:'absolute',top:'230px',left:'-10px',whiteSpace: 'nowrap',
                 color:"#CBC0D3"}} class="account">show your pretty item!</p>
                </div>
         <div style={{width:'550px',height:'630px',border:'1px solid lightgray',position:'absolute',
              left:'50px',top:'-70px',paddingTop:'0px', boxShadow:'2px 3px 5px 0px lightgray',marginBottom:'100px',
              borderRadius:'10px',marginTop:'10px',zIndex:10,background:'#EAC7CC',zIndex:"50"
             ,paddingBottom:'10px'}}>
      
                
                 <Form  className='uploadTitle' style={{maxWidth:'700px',margin:'2rem auto',}}
            onSubmitCapture={submitHandler}>
                {/* <div style={{position:'absolute',top:'-140px',left:'250px',fontSize:'25px',
              }}>상품 업로드</div> */}
              <div style={{position:'absolute',top:'-70px',left:'120px',fontSize: '50px',color:'white'
              }}> <PlusOutlined /></div> 
              
             <FileUpload style={{color:'#b9929f'}}  refreshFunction={updateImages}></FileUpload>
             
               <br>
               </br>
               
               <input style={{position:'absolute',left:'10px',top:'100px',marginLeft:'10px' ,width: '500px',marginTop:'20px',marginBottom:'10px',
              }} className="update_input"placeholder="상품명" onChange={titleChangeHandler} value={title} ></input>
               
              
               <textarea className="update_input" style={{width:'700px',height:'80px',width: '500px',marginTop:'50px',
               position:'absolute',left:'14px',top:'120px',placehoderColor:'black'
               }}onChange={descriptionChangeHandler} value={Descriptoion}  placeholder="상품설명...">  </textarea>
               <br>
               </br>
               <label style={{ position:'absolute',left:'25px',top:'260px',color:"white"}}>가격($)</label>
               <input className="update_input" style={{marginLeft:'10px',width:'500px',
             position:'absolute',left:'12px',top:'275px'} }type="number" onChange={priceChangeHandler} value={Price}></input>
               <br>
               </br>
               <div style={{border:"none"}}>
               <caption style={{position:'absolute',left:'25px',top:'320px',display: 'inline-block',
                color:'white'}}>상품 카테고리 :</caption>
               <select className="select" style={{marginTop:'10px',marginBottom:'10px',
                 position:'absolute',left:'125px',top:'320px',border:'none',borderRadius:"2px",
                  textAlignLast:"center" }}onChange={ContinetChangeHandler} value={continent}>
                   {Continents.map((item)=>{
                     return(
                        <option style={{textAlignLast:"center"}}key ={item.key} value={item.key}>{item.value}</option>
                         )  
                    
                   })}
               
               </select>
               </div>
              
               <br>
               </br>
               <button style={{ position:'absolute',left:'240px',top:'350px',
              borderRadius:"10px",height:'40px' }} className=" button LG_btn Login_button" htmlType='submit'  >
                   확인
               </button>

           </Form >
                 </div>
           

         
           </div>
          
            </div>
            
        </div>
          
    );
};

export default UploadProductPage;