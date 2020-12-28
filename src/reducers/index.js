import { combineReducers } from "redux";
import basicCalculationReducer from "./basicCalculationReducer";
import scientificCalculationReducer from "./scientificCalculationReducer";

const rootReducer = combineReducers({
  basicCalculationReducer,
  scientificCalculationReducer,
});

export default rootReducer;
