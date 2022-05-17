import produce from 'immer';

import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART
} from '../_actions/types';

export default function (state = {}, action) {
    return produce(state, (draftState) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
           
          case  REGISTER_USER:
              return {...state,register:action.payload}

              case  AUTH_USER:
                return {...state,userData:action.payload}
                
                case LOGOUT_USER:
                    return {...state ,logoutsuccess:action.payload}
                    case LOGOUT_USER:
                    return {...state,
                    userData:{
                        ...state.userData,
                        cart:action.payload
                    }}
              
        default:
            return state;
    }
})
}