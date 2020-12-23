/* eslint-disable import/no-anonymous-default-export */
export default function reducer(state, action) {
  switch (action.type) {
    case "CLEAR_RESULT":
      return {
        ...state,
        operationType: "",
        value_1: 0,
        value_2: 0,
        result: 0,
      };

    case "ADDITION":
      return { ...state, operationType: "+" };

    case "SUBTRACTION":
      return { ...state, operationType: "-" };

    case "MULTIPLICATION":
      return { ...state, operationType: "*" };

    case "DIVISION":
      return { ...state, operationType: "/" };

    case "SET_FIRST_VALUE":
      return { ...state, value_1: action.payload };

    case "SET_SECOND_VALUE":
      return { ...state, value_2: action.payload };

    case "CALCULATE_RESULT":
      switch (state.operationType) {
        case "+":
          return {
            ...state,
            result: state.value_1 + state.value_2,
          };

        case "-":
          return {
            ...state,
            result: state.value_1 - state.value_2,
          };

        case "*":
          return {
            ...state,
            result: state.value_1 * state.value_2,
          };

        case "/":
          return {
            ...state,
            result: state.value_1 / state.value_2,
          };

        default:
          return state;
      }

    default:
      return state;
  }
}
