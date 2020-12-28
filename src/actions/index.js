const square = (value) => {
  return {
    type: "SQUARE",
    value: value,
  };
};

const abs = (value) => {
  return {
    type: "ABSOLUTE",
    value: value,
  };
};

const sin = (value) => {
  return {
    type: "SIN",
    value: value,
  };
};

const cos = (value) => {
  return {
    type: "COS",
    value: value,
  };
};

const tan = (value) => {
  return {
    type: "TAN",
    value: value,
  };
};

const setInputs = (value, operation) => {
  return {
    type: "SET_INPUTS",
    value: value,
    operation: operation,
  };
};

const calculateResult = () => {
  return {
    type: "CALCULATE_RESULT",
  };
};

const clearResult = () => {
  return {
    type: "CLEAR_RESULT",
  };
};

export { square, abs, sin, cos, tan, setInputs, calculateResult, clearResult };
