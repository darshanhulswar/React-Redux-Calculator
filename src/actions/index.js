const clearResult = () => {
  return {
    type: "CLEAR_RESULT",
  };
};

const addition = () => {
  return {
    type: "ADDITION",
  };
};

const subtraction = () => {
  return {
    type: "SUBTRACTION",
  };
};

const division = () => {
  return {
    type: "DIVISION",
  };
};

const multiplication = () => {
  return {
    type: "MULTIPLICATION",
  };
};

const setFirstValue = (value) => {
  console.log(value);
  return {
    type: "SET_FIRST_VALUE",
    payload: value,
  };
};

const setSecondValue = (value) => {
  console.log(value);
  return {
    type: "SET_SECOND_VALUE",
    payload: value,
  };
};

const calculateResult = () => {
  return {
    type: "CALCULATE_RESULT",
  };
};

export {
  addition,
  subtraction,
  multiplication,
  division,
  clearResult,
  setFirstValue,
  setSecondValue,
  calculateResult,
};
