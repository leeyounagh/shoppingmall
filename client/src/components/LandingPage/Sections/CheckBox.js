import React, { Fragment, useState } from 'react';
import { Collapse } from 'antd';
import { Checkbox } from 'antd';

const { Panel } = Collapse;

const CheckBox = (props) => {
    const [Checked,setChecked] =useState([])
    
    function handdleToggle (value){
         //누른것의 Index를 구하고 
          const currentIndex = Checked.indexOf(value)
         // 전체 Checked 된 state에서 현재 누른 Checkbox가  이미 있다면 빼주고 state를 넣어준다
          const newChecked = [...Checked]
          if(currentIndex === -1){
            newChecked.push(value)
          } else{
              newChecked.splice(currentIndex,1)
          }

          setChecked(newChecked)
          props.handleFilters(newChecked)

    }
    const renderCheckboxList= () => props.list && props.list.map((value,index)=>{
       return( <React.Fragment>
        <Checkbox onChange={()=>{
            handdleToggle(value._id)
        }}  checked={Checked.indexOf(value._id)===-1?false:true}/>
            <span>{value.name}</span>
     
        </React.Fragment>)
    })
    return (
        <div>
           <Collapse accordion>
                <Panel header="카테고리" key="1">
                    {renderCheckboxList()}
                
                </Panel>
              
            </Collapse>
        </div>
    );
};

export default CheckBox;