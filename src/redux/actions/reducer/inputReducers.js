// import{CHANGE_INPUT, CHANGE_ITEM} from "../index"
import { combineReducers } from "redux";

function showMiInput(currentId = null, action) {
  if (action.type === "CHANGE_INPUT") {
    return action.payload;
  }
  return currentId;
}
const loginLocalStorage = window.localStorage.getItem("login");
const initState = {
  login: loginLocalStorage !== null ? loginLocalStorage === "true" : false,
};
function cheekIsLogged(log = initState, action) {
  if (action.type === "LOGGED") {
    window.localStorage.setItem("login", action.payload);

    return action.payload;
  }
  return log;
}
export default combineReducers({
  showInputId: showMiInput,
  clickLogin: cheekIsLogged,
});
