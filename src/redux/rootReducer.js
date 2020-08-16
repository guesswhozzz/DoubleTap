import { combineReducers } from "redux";
import { gamePadReducer } from "./gamePadReducer";
export const rootReducer = combineReducers({
  gamepadstatus: gamePadReducer,
});
