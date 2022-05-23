

import React, { useEffect, useState } from 'react';

const HistoryPage = (props) => {
     
    return (
        <div className='history_text'>
          <div  style={{background:'#E2C2C6',width:'100%',height:'800px',position:'fixed'}}>
         <div style={{ width: '80%', margin: '3rem auto' }}>
        <div style={{ textAlign: 'center',marginTop:'120px' }}>
            <h1>History</h1>
        </div>
        <br />

        <table>
            <thead>
                <tr>
                    <th>Payment Id</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Date of Purchase</th>
                </tr>
            </thead>

            <tbody>

                {props.user.userData && props.user.userData.history &&
                    props.user.userData.history.map(item => (
                        <tr key={item.id}>
                            <td>{item[0].id}</td>
                            <td>${item[0].price}</td>
                            <td>{item[0].quantity}</td>
                            <td>{item[0].dateOfPurchase}</td>
                        </tr>
                    ))}


            </tbody>
        </table>
    </div>
        </div>
        </div>
     
     
    );
};

export default HistoryPage;