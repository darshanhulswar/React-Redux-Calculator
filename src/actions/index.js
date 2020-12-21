const clearResult = (state, action) => {
  return {
    type: "CLEAR",
  };
};

const add = (state, action) => {
  console.log("addd");
  return {
    type: "ADD",
    make: "some",
  };
};

const sub = (state, action) => {
  console.log("sub");
  return {
    type: "SUB",
  };
};

const div = (state, action) => {
  console.log("div");
  return {
    type: "DIV",
  };
};

const mul = (state, action) => {
  console.log("mul");
  return {
    type: "MUL",
  };
};

export { clearResult, add, sub, mul, div };
