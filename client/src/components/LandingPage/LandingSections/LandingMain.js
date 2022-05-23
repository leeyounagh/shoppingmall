import React, { Fragment, useEffect, useState } from 'react';
import './LandingMain.css'


const LandingMain = () => {
      

 

   

    const Images = () =>{
        return(
            <div className='fade-in scale_hover ' style={{width:'100%',height:'800px', background:'#E2C2C6',position:'relative'}}>
                 <img alt='왼쪽1번' className='LandingMain_Translate' src='./image/비오는날여인.jpg' style={{width:'180px',height:'230px',
                position:'absolute',left:'150px',top:'580px',zIndex:'5'}}></img>
            <img alt='왼쪽2번' className='LandingMain_Translate1 LandingMain_scaleY'src='./image/아오이유우.jpg'style={{width:'500px',height:'600px',
             position:'absolute',top:'100px',left:'200px',zIndex:'1'}}></img>
            <img alt='왼쪽3번' className='LandingMain_Translate2'  src='./image/일본교복.jpg'style={{width:'180px',height:'200px',
         position:'relative',top:'480px',left:'570px',zIndex:'5'}}></img>
          <span className='Landing_Title title_fade'style={{left:'720px',zIndex:'30',display:'flex',position:'absolute',justifyContent:'center',
           top:'150px'}}>
              
          Vint</span>
            
          <div className='Landing_Title title_fade1'style={{display:'flex',justifyContent:'center',position:'absolute',left:'760px',
            top:'190px'}}>Age</div>
           
            <img alt='오른쪽1번'  className='LandingMain_Translate3 LandingMain_scaleY' src='./image/명품도배.jpg'style={{width:'400px',height:'500px',
          position:'absolute',top:'100px',left:'60%',zIndex:'1'}}></img>
            <img alt='오른쪽2번' className='LandingMain_Translate4' src='./image/힙한여자둘.jpg'style={{width:'150px',height:'20%',
             position:'absolute',top:'450px',left:'85%',zIndex:'5'}}></img>
              <img alt='오른쪽3번' className='LandingMain_Translate6' src='./image/물가에서.jpg'style={{width:'150px',height:'20%',
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