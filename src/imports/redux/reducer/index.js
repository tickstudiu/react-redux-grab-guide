import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import user from './UserReducer';

const rootReducer = combineReducers({
    lang: languageReducer,
    user
});

export default rootReducer;