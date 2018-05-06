
import {AUTH_USER} from "../actions/type";

export default (state={},action)=>{
  switch (action.type){
    case AUTH_USER:
      return state,action.payload.user;
    default:
      return state
  }
}