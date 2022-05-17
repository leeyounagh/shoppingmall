import React, { useState } from 'react';
import { Collapse } from 'antd';
import { Checkbox } from 'antd';
import { Radio } from 'antd';
const { Panel } = Collapse;

const RadioBox = (props) => {

    const[Value,setValue] =useState(0)


    const renderRadioBox = () => (
        props.list && props.list.map(value => (
            <Radio key={value._id} value={value._id}> {value.name} </Radio>
        ))
    )

    const handleChange = (event) =>{
        setValue(event.target.value)
        props.handleFilters(event.target.value)
    }
    return (
        <div>
              <Collapse accordion>
                <Panel  header="This is panel header 1" key="1">
               
                <Radio.Group onChange={handleChange} value={Value}>
                        {renderRadioBox()}
                    </Radio.Group>

                </Panel>
              
            </Collapse>
        </div>
    );
};

export default RadioBox;