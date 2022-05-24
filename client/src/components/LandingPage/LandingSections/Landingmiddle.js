import React from 'react';
import './LandingMiddle.css';

const Landingmiddle = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',marginTop:'100px',
         paddingBottom:'50px'}}>
            <span>
            <img alt='테스트' src='./image/상품누끼.jpg' style={{width:'400px',height:'500px'}}></img>
            </span>
            <span   className='Landining-middletext' style={{marginLeft:'50px' ,position:'relative',
               top:'50px'}}>
            <div>빈트에이지란?</div>
            <br/>
            <div>
            <div>시대의 변화에 따라 거리에 나가면 모두가 같은옷을 입는 모습을 자주 볼수 있습니다.</div>
            
            <div>빈트에이지는 같은옷에대해 피로감을 느낀 현대인들을위해</div>
            <div>유저가 직접 빈티지옷을 팔수있으며</div>
            <div>구매또한 가능한 빈티지 패션 플랫폼입니다.</div>
            </div>
            </span>
        
          
        </div>
    );
};

export default Landingmiddle;