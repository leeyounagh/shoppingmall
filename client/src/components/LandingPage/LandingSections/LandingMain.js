import React, { Fragment, useEffect, useState } from 'react';
import './LandingMain.css'


const LandingMain = () => {
      

 

   

    const Images = () =>{
        return(
            <div className='fade-in scale_hover ' style={{width:'100%',height:'800px', background:'#E2C2C6',position:'relative'}}>
                 <img alt='왼쪽1번' className='LandingMain_Translate' src='./image/비오는날여인.jpg' style={{width:'180px',height:'230px',
                position:'relative',left:'0px',top:'400px',zIndex:'5'}}></img>
            <img alt='왼쪽2번' id='aoi' className='LandingMain_Translate1 LandingMain_scaleY'src='./image/아오이유우.jpg'style={{width:'500px',height:'600px',
             position:'relative',top:'50px',left:'-150px',zIndex:'1'}}></img>
            <img alt='왼쪽3번' className='LandingMain_Translate2'  src='./image/일본교복.jpg'style={{width:'180px',height:'200px',
         position:'relative',top:'250px',left:'-250px',zIndex:'5'}}></img>
          <span className='Landing_Title title_fade' id='main_title' style={{left:'0px',tzIndex:'30',display:'flex',position:'relative',justifyContent:'center',
           top:'-400px'}}>
              
          Vint</span>
            
          <div className='Landing_Title title_fade1' id='main_title' style={{display:'flex',justifyContent:'center',position:'relative',left:'40px',
            top:'-470px'}}>Age</div>
           
            <img alt='오른쪽1번' id='main' className='LandingMain_Translate3 LandingMain_scaleY' src='./image/명품도배.jpg'style={{width:'400px',height:'500px',
          position:'absolute',top:'100px',left:'60%',zIndex:'1'}}></img>
            <img alt='오른쪽2번'id='main2' className='LandingMain_Translate4' src='./image/힙한여자둘.jpg'style={{width:'150px',height:'20%',
             position:'absolute',top:'450px',left:'85%',zIndex:'5'}}></img>
              <img alt='오른쪽3번'id='main3' className='LandingMain_Translate6' src='./image/물가에서.jpg'style={{width:'150px',height:'20%',
             position:'absolute',top:'450px',right:'35%',zIndex:'5'}}></img>
            </div>
        )

    }
    return (
        <Fragment>
           {Images()}
        {/* <div style={{left:'720px',zIndex:'30',display:'flex',position:'absolute',justifyContent:'center',
           top:'300px'}}> <a href='/landingmiddle'>↓</a></div>   */}
   
        </Fragment>
    );
};

export default LandingMain;