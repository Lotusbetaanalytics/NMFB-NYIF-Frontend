import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userValidateReducer,
  userAcceptReducer,
  userRejectReducer,
  updateBankReducer,
  updateDetailsReducer,
  updateNewBankReducer,
} from "./reducers/bvnReducers";

const reducer = combineReducers({
  userDetails: userValidateReducer,
  userAccept: userAcceptReducer,
  userReject: userRejectReducer,
  userBank: updateBankReducer,
  status: updateDetailsReducer,
  update: updateNewBankReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userDetails: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
