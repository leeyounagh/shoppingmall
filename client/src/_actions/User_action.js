import axios from 'axios';

import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART
} from './types';
export function loginUser(dataToSubmit) {

    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}


export function auth() {

    const request = axios.get('/api/users/auth')
        .then(response =>response.data)
    return {
        type: AUTH_USER,
        payload: request
    }
}


// export function logoutUser(){
//    const request= axios.get('/api/users/logout')
//     .then(response => response.data);

//     return {
//         type: LOGOUT_USER,
//         payload: request
//     } 
// }

export function addtoCart(id){
    let body= {
        productId:id
    }
 
    const request= axios.post('/api/users/addToCart',body)
    .then(response => response.data);

    return {
        type:ADD_TO_CART,
        payload: request
    } 
 }