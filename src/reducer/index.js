import authReducer from "./auth";
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    login: authReducer
});

export default allReducer;