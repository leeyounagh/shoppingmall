import React from 'react';
import './NewItems.css'

const NewItems = () => {
    return (
        <div style={{background:'#E2C2C6',width:'100%',height:'500px',marginTop:'300px',
            display:'flex',justifyContent:'center'}}>
                <div className='NewItem_text'style={{position:'relative',top:'-50px',
                 left:'10%'}}>새로들어온 상품들</div>
            <div style={{width:'70%',height:'200px',
        background:'#B9929F'}}></div>
        </div>
    );
};

export default NewItems;