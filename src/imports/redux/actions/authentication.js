import axios from 'axios';
import {AUTH_USER,REGISTER_USERS} from './type';
const TEST_URL = 'http://localhost:3005';
//AUTHENTICATION ONLY
export const register = (profile) => async dispatch => {
  const res = await axios.post(`${TEST_URL}/register`, profile);
  localStorage.setItem('token',res.data.token);
  dispatch({
    type:AUTH_USER,
    payload:res.data,
  })
}


export function Login(profile){
  return async dispatch=>{
    const res = await axios.post(`${TEST_URL}/login`,profile);
    localStorage.setItem('token',res.data.token);
    dispatch({
      type:AUTH_USER,
      payload:res.data
    })
  }
}