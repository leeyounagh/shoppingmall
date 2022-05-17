import React, { useState } from 'react';
import { Input, Space } from 'antd';


const { Search } = Input;

const SearchFeature = (props) => {
        
    const [SearchTerm,setSearchTerm] = useState('')

      const searchHandler = (event) =>{
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
      }
    return (
        <div>
             <Search placeholder="input search text" 
             value={SearchTerm}onChange={searchHandler} style={{ width: 200 }} />
        </div>
    );
};

export default SearchFeature;