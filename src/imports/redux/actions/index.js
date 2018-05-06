import axios from 'axios';
import {CHANGELANGUAGE } from '../types';
export * from './authentication.js'
//API ONLY
export const changeLanguage = (lang) => dispatch => {
    dispatch({
        type: CHANGELANGUAGE,
        payload: lang
    })
}
