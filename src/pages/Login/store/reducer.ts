import * as constants from './constants';

const defaultState = {
    isLogin:false
};

const reducer = (state = defaultState, action: any) => {
    switch(action.type){
        case constants.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true
            };
        default:
            return state;
    }
};

export default reducer;