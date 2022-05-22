import React, { Fragment, useEffect, useState } from 'react';
import './LandingMain.css'

const LandingMain = () => {

    


    const Images = () =>{
        return(
            <div className='fade-in ' style={{width:'100%',height:'1200px', background:'#9F814F'}}>
                 <img alt='왼쪽1번' className='LandingMain_Translate2' src='./image/비오는날여인.jpg' style={{width:'250px',height:'30%',
                position:'absolute',left:'150px',top:'485px',zIndex:'5'}}></img>
            <img alt='왼쪽2번' className='LandingMain_Translate1'src='./image/아오이유우.jpg'style={{width:'500px',height:'600px',
             position:'absolute',top:'100px',left:'200px',zIndex:'1'}}></img>
            <img alt='왼쪽3번' className='LandingMain_Translate2'  src='./image/일본교복.jpg'style={{width:'200px',height:'200px',
         position:'relative',top:'480px',left:'570px',zIndex:'5'}}></img>
          <span style={{left:'-100px',zIndex:'30',display:'flex',justifyContent:'center'}}>
              신개념 빈티지 패션 플랫폼</span>
          <div style={{zIndex:'30',display:'flex',justifyContent:'center'}}>vintage</div>
          
            <img alt='오른쪽1번'  className='LandingMain_Translate1' src='./image/명품도배.jpg'style={{width:'400px',height:'500px',
          position:'absolute',top:'100px',left:'60%',zIndex:'1'}}></img>
            <img alt='오른쪽2번' className='LandingMain_Translate2' src='./image/힙한여자둘.jpg'style={{width:'150px',height:'20%',
             position:'absolute',top:'450px',left:'85%',zIndex:'5'}}></img>
              <img alt='오른쪽3번' className='LandingMain_Translate2' src='./image/물가에서.jpg'style={{width:'150px',height:'20%',
             position:'absolute',top:'450px',right:'35%',zIndex:'5'}}></img>
            </div>
        )

    }
    return (
        <Fragment>
           {Images()}
        </Fragment>
    );
};

export default LandingMain;