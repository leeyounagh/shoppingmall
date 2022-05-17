import React from 'react';
import { Carousel } from 'antd'

const ImageSliider = (props) => {
    return (
        <div>
            <Carousel autoplay>
               {props.images.map((image,index)=>{
                  return(
                    <div key={index}>
                     <img style={{width:'100%',maxHeight:'150px'}}
                      src={`http://localhost:5000/${image}`}>
                     </img>
                   </div>
                  ) 
               })}
              </Carousel>
        </div>
    );
};

export default ImageSliider;