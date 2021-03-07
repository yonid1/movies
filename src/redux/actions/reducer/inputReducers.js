// import{CHANGE_INPUT, CHANGE_ITEM} from "../index"
import { combineReducers } from "redux";

function showMiInput(currentId = null, action) {
  if (action.type === "CHANGE_INPUT") {
    return action.payload;
  }
  return currentId;
}

export default combineReducers({
  showInputId: showMiInput,
});
