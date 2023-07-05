//thunk

import { createStore, applyMiddleware } from "redux";
import Reduxthunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(Reduxthunk));
