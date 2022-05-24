import React, { useEffect,useState } from 'react';

import LandingMain from './LandingSections/LandingMain';
import Landingmiddle from './LandingSections/Landingmiddle';
import NewItems from './LandingSections/NewItems'

const LandingPage = () => {
          

    const [position,setPosition] = useState(0)
    function onScroll(){
        setPosition(window.scrollY)
        console.log(window.scrollY)
    }

    useEffect(()=>{
           window.addEventListener('scroll',onScroll)
           return(()=>{
               window.removeEventListener('scroll',onScroll);
           })
    },[])
   
    return (
        <div id="scrollbar"style={{width:'100%',height:'100%'}}>
           <div >
           <LandingMain></LandingMain>
           </div>
        
           
          
           <p
        className="desc"
        style={{ position:'relative',left:'1000px',
          transform: `translateX(${-position}px)`,
         
        }}
      >
        more cheap,more unique,more hot<br/>
        매일이 즐거워지는 빈티지 패션플랫폼<br/>
        빈트 에이지
      </p>

       \ <p
        className="desc2"
        style={{ position:'relative',left:'-700px',
          transform: `translateX(${position}px)`,
        }}
      >
        집에 박혀있는 나의 패션템 <br/>
        누군가에게는 환영받는 내새끼 입니다.<br/>
        분양해주고 돈도 벌어보시는건 어떠세요?
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 900) / 50,
          
        }}
      >
      빠져보세요 
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 1060) / 50,
        }}
      >
       빈트에이지의 세상으로!
      </p>
      {/* <p
        className="desc3"
        style={{
          opacity: (position - 1110) / 50,
        }}
      >
        Excepteur sint occaecat
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 1250) / 50,
        }}
      >
        sunt in culpa qui officia deserunt
      </p> */}
      <div>
           <Landingmiddle></Landingmiddle>
           </div>
        </div>
    );
};

export default LandingPage;