import { combineReducers, createStore, compose } from "redux";
import { gamePadReducer } from "./gamePadReducer";

const rootReducer = combineReducers({
  gamepadstatus: gamePadReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
