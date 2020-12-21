/* eslint-disable import/no-anonymous-default-export */
export default function reducer(state, action) {
  switch (action.type) {
    case "CLEAR":
      return {
        ...state,
        result: 0,
        tempVariable: 0,
        operation: "",
      };
    default:
      return state;
  }
}
