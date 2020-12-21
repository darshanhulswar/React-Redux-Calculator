import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearResult, add, sub, mul, div } from "./actions";

const App = () => {
  const result = useSelector((state) => state.result);
  console.log(result);
  const dispatch = useDispatch();

  const clearResultHandler = (e) => {
    dispatch(clearResult());
  };

  let currentInpValue = "";

  const handleChange = (e) => {
    currentInpValue += e.target.innerText;
    console.log(currentInpValue);
  };

  let currentOperationType = "";
  const handleOperationType = (e) => {
    currentOperationType = e.target.innerText;

    switch (currentOperationType) {
      case "+":
        dispatch(add(currentInpValue));
        return;

      case "-":
        dispatch(sub());
        return;
      case "*":
        dispatch(mul());
        return;
      case "/":
        dispatch(div());
        return;
      default:
        break;
    }
  };

  return (
    <div className="Calculator">
      <h2>Calculator</h2>
      <input type="text" readOnly value={result} />
      <div className="keypad">
        <div className="Numeric__input">
          <button onClick={handleChange}>1</button>
          <button onClick={handleChange}>2</button>
          <button onClick={handleChange}>3</button>
          <button onClick={handleChange}>4</button>
          <button onClick={handleChange}>5</button>
          <button onClick={handleChange}>6</button>
          <button onClick={handleChange}>7</button>
          <button onClick={handleChange}>8</button>
          <button onClick={handleChange}>9</button>
          <button onClick={handleChange}>0</button>
        </div>
        <div className="Math__input">
          <button onClick={handleOperationType}>+</button>
          <button onClick={handleOperationType}>-</button>
          <button onClick={handleOperationType}>*</button>
          <button onClick={handleOperationType}>/</button>
          <button className="special_class">=</button>
          <button onClick={clearResultHandler}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default App;
