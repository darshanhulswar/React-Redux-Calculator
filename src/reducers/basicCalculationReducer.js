const initialState = {
  result: 0,
  inputs: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CLEAR_RESULT":
      return {
        result: 0,
        inputs: [],
      };

    case "SET_INPUTS":
      return {
        ...state,
        inputs: [
          ...state.inputs,
          { value: action.value, operation: action.operation },
        ],
      };

    case "CALCULATE_RESULT":
      let inputValues = [...state.inputs];
      console.log(inputValues);
      let finalResult = 0;

      inputValues.forEach((inputObject) => {
        console.log(inputObject.operation);
        switch (inputObject.operation) {
          case "+" || "=":
            finalResult += inputObject.value;
            break;

          case "-" || "=":
            finalResult -= inputObject.value;
            break;

          case "*" || "=":
            finalResult *= inputObject.value;
            break;

          case "/" || "=":
            finalResult /= inputObject.value;
            break;

          default:
            break;
        }
      });
      console.log(inputValues);

      return { inputs: [], result: finalResult };

    default:
      return state;
  }
}
