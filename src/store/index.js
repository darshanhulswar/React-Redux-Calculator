import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  result: 0,
};

export const store = createStore(reducer, initialState);
