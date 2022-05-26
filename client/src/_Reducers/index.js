import { combineReducers } from "redux";
import user from './user_reducer'
import Log_Reducer from './Log_Reducer'


const rootReducer = combineReducers({
    user
})

export default rootReducer