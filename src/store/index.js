import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  value_1: 0,
  value_2: 0,
  operationType: "",
  result: 0,
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
