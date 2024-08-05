import { combineReducers } from "redux";
import reducers from "./reducers";
import AdminReducer from './AdminReducer';

const rootReducer = combineReducers({
  cart: reducers,
  receivedItems: AdminReducer,
});

export default rootReducer;
