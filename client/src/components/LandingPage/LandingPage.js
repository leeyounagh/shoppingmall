import React from 'react';
import LandingMain from './LandingSections/LandingMain';
import Landingmiddle from './LandingSections/Landingmiddle';
import NewItems from './LandingSections/NewItems'

const LandingPage = () => {
    return (
        <div style={{width:'100%',height:'100%', background:'#9F814F'}}>
           <div>
           <LandingMain></LandingMain>
           </div>
           
           <div>
           <Landingmiddle></Landingmiddle>
           </div>
          <div>
          <NewItems></NewItems>
          </div>
            
        </div>
    );
};

export default LandingPage;