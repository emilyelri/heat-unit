import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';

export  const LOGIN_START = 'LOGIN_START';
export  const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export  const LOGIN_FAIL = 'LOGIN_FAIL';

export  const REGISTER_START = 'REGISTER_START';
export  const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export  const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGOUT = 'LOGOUT';


export const login = (credentials) => dispatch => {
    dispatch({type: LOGIN_START});
    axios
        .post(`login`, credentials)
        .then(response => {
            console.log('response', response)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.id)
            dispatch({type: LOGIN_SUCCESS, payload: response.data.id})
        })
        .catch(err => {
            dispatch({type: LOGIN_FAIL, payload: err})
            console.log("error", err.response)
        })
}

export const register = (credentials) => dispatch => {
    dispatch({type: REGISTER_START});
    axios
        .post(`api/register`, credentials)
        .then(response => {
            console.log('response', response)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.id)
            dispatch({type: REGISTER_SUCCESS, payload: response.data.id})
        })
        .catch(err => {
            dispatch({type: REGISTER_FAIL, payload: err})
            console.log("error", err.response)
        })
}

export const logout = () => dispatch => {
    dispatch({type: LOGOUT});
}