import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LandingMain from './LandingSections/LandingMain';
import Landingmiddle from './LandingSections/Landingmiddle';
import NewItems from './LandingSections/NewItems'

const LandingPage = () => {

   
    return (
        <div id="scrollbar"style={{width:'100%',height:'100%', background:'#E2C2C6'}}>
           <div >
           <LandingMain></LandingMain>
           </div>
           
           <div>
           <Landingmiddle></Landingmiddle>
           </div>
          {/* <div>
          <NewItems></NewItems>
          </div> */}
            
        </div>
    );
};

export default LandingPage;