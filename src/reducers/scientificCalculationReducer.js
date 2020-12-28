const initialState = {
  result: 0,
};

export default function scientificCalculatonReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case "SQUARE":
      return {
        ...state,
        result: action.value * action.value,
      };
    case "ABSOLUTE":
      return {
        ...state,
        result: Math.abs(action.value),
      };
    case "SIN":
      return {
        ...state,
        result: Math.sin(action.value),
      };
    case "COS":
      return {
        ...state,
        result: Math.cos(action.value),
      };
    case "TAN":
      return {
        ...state,
        result: Math.tan(action.value),
      };
    default:
      return state;
  }
}
