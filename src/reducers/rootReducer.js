import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import modalReducer from "./modalReducer";
import calendarReducer from "./calendarReducer";

export default combineReducers({
  simpleReducer,
  modalReducer,
  calendarReducer
});
