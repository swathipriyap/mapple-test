import { applyMiddleware, combineReducers, createStore } from "redux";
import { homeReducer } from "../reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
  home: homeReducer,
});

export const store = createStore(
  reducers, applyMiddleware(thunk)
);
