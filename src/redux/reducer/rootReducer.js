import { combineReducers } from "redux";
import { loginReducer } from "./reducer";
import { todoSlice } from '../thunks/todoSlice';
import {languageReducer} from './reducerlanguage'
import {cartSlice} from "../thunks/cartSlice";

export default combineReducers({
  Login: loginReducer,
  todo: todoSlice.reducer,
  Change: languageReducer,
  cart: cartSlice.reducer,
});
