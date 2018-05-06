import axios from 'axios';

export const requestToken = async (url, user) => {
    try {
        const res = await axios.post(url, user);
        return {
          user: res.data.user,
          token: res.data.token,
          success: true
        };
      } catch (error) {
        return {
          error: error.response,
          success: false
        };
      }
}

export const registerToken = (token) => {
    localStorage.setItem('token', token);
}

export const getToken = () => {
    return localStorage.getItem('token');
}

export const isAuth = () => {
    return getToken()?true:false;
}

export const isNotAuth = () => {
    return (!getToken()) ? true : false;
} //not used

export const userLogout = () => {
    localStorage.removeItem('token');
}