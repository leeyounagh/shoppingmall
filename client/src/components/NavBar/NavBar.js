import React, { Fragment,useEffect,useState } from 'react';
import LeftMenu from './Section/LeftMenu';
import RightMenu from './Section/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Section/NavBar.css'
import { useParams } from 'react-router-dom';
const NavBar = () => {
    const [visible, setVisible] = useState(false)
    let { path } = useParams();
//     useEffect(()=>{
// <RightMenu></RightMenu>
//     },[])
    const showDrawer = () => {
        setVisible(true)
      };
    
      const onClose = () => {
        setVisible(false)
      };

      // console.log("주소확인",{ path })
    return (
        <nav className="menu " style={{ position: 'fixed', top:'0px',zIndex:300, width: '100%' }}>
   
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          {/* <Icon type="align-right" /> */}
        </Button>
        {/* <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer> */}
      </div>
    </nav>
    );
};

export default React.memo(NavBar);