import { CHANGELANGUAGE } from '../types';

export default (state = {}, action) => {
    switch (action.type) {
        case CHANGELANGUAGE:
            localStorage.setItem('language', action.payload);
            return action.payload
        default:
            return state;
    }
}