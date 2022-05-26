import axios from 'axios';

import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone'


const FileUpload = (props) => {

   const [Images,setImages] =useState([])

  const dropHandler = (files) => {

    let formData = new FormData();

    const config = {

      header: { "content-type": "multipart/form-data" }, //헤더에다가 어떤 타입인지 전달해주는 것.

    };
  
    formData.append("file", files[0]);

    axios.post("/api/product/image", formData, config).then((response) => {

      if (response.data.success) {

        console.log(response.data);

        setImages([...Images,response.data.fileName])
        props.refreshFunction([...Images,response.data.fileName])
        
           console.log(Images)
      } else {

        alert("파일을 저장하는데 실패했습니다.");

      }

    });

  };

  const deleteHandler = (image) =>{
     const currentIndex = Images.indexOf(image)
       

     let newImages = [...Images]
     newImages.splice(currentIndex,1)
     setImages(newImages)
     props.refreshFunction(newImages)
  }
  const dropzoneStyle = {
   
    border : "1px solid black",
    position:'relative',
    top:'-150px'
};
    return (
        <div style ={{display:'flex', justifyContent:'space-between',
        position:'relative',top:'-150px',left:'0px'}}>
           <Dropzone className="dropzone" style={dropzoneStyle} onDrop={dropHandler}>
           {({getRootProps, getInputProps}) => (
          <section>
          <div style={{width:250,height:240,border:'1px solid white'}}{...getRootProps()}>
        <input {...getInputProps()} />
       
        {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
         </div>
        </section>
          )}
        </Dropzone>
        <div style={{display:'flex',width:'250px',height:'240px',
         overflowX:'scroll',marginLeft:"5px",zIndex:'300'}}> 
          {Images.map((image,index)=>{
           return( <div key ={index} onClick={()=>deleteHandler(image)}>
               <img style={{ minWidth: '300px', width: '250px', height: '240px'}}
           src={`http://localhost:5000/${image}`}
        /> 
         
               </div>) 
          })}
        </div>
        </div>
    );
};

export default FileUpload;