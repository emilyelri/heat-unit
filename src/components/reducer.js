import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT
}  from './actions/index';


const initialState = {
    id: localStorage.getItem('user') || null,
    isLoading: false,
    error: null,
    score: 0

}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                id: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case REGISTER_START:
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                id: action.payload
            }
        case REGISTER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                id: null
            }
    default:
        return state;                         
    }
}

export default reducer;
