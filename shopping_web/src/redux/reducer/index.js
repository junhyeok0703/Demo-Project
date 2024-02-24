import { combineReducers } from "redux";
import loggedreducer from "./loggedreducer";
import reducer from "./reducer";

export default combineReducers({
  loggedred: loggedreducer,
  product: reducer,
});
