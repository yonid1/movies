import { CHANGE_INPUT,LOGGED } from "./reducer/types";

export function changeInput(id) {
  return {
    type: CHANGE_INPUT,
    payload: id,
  };
}

export function isLogged(login){
  return {
    type:LOGGED,
    payload: login,
  }
  
}
export function logOutAction(){
  return{
    type:LOGGED,
    payload:false
  }
}