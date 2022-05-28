import React from "react";

import { Menu } from "antd";



const items = [

  { label: <a href="/">Home</a>, key: "mail" },



];



function LeftMenu(props) {

  return <Menu mode="horizontal" items={items} />;

}



export default LeftMenu;
