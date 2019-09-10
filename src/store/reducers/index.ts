import { combineReducers } from "redux";
import { hobbiesReducer } from "./hobbies.reducer";

export default combineReducers({
  hobbies: hobbiesReducer,
});
