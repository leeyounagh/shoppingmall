

import React, { useEffect, useState } from 'react';

const HistoryPage = (props) => {
     
    return (
        <div style={{ width: '80%', margin: '3rem auto' }}>
        <div style={{ textAlign: 'center' }}>
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
    );
};

export default HistoryPage;