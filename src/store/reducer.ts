import {combineReducers} from 'redux';
import {reducer as loginReducer} from '../pages/Login/store'

export default combineReducers({
    login: loginReducer
});
