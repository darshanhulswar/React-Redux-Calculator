import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  let result = 0;
  const finalResult = useSelector((state) => state.result);
  console.log(finalResult);

  return (
    <div className="Calculator">
      <h2>Calculator</h2>
      <input type="text" readOnly value={result} />
      <div className="keypad">
        <div className="Numeric__input">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
        </div>
        <div className="Math__input">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
          <button className="special_class">=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
