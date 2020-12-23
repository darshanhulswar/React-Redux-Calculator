import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearResult,
  addition,
  subtraction,
  multiplication,
  division,
  setFirstValue,
  calculateResult,
  setSecondValue,
} from "./actions";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const { result } = useSelector((state) => state);
  const dispatch = useDispatch();
  const inputFieldRef = useRef(null);
  useEffect(() => {
    setInputValue(`${result}`);
  }, [result]);

  return (
    <div className="Calculator">
      <h2>Calculator</h2>
      <input
        ref={inputFieldRef}
        type="text"
        style={{ textAlign: "right" }}
        readOnly
        value={inputValue !== "" ? inputValue : result}
      />
      <div className="keypad">
        <div className="Numeric__input">
          <button
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            1
          </button>
          <button
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            2
          </button>
          <button
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            3
          </button>
          <button
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            4
          </button>
          <button
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            5
          </button>
          <button
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            6
          </button>
          <button
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            7
          </button>
          <button
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            8
          </button>
          <button
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            9
          </button>
          <button
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            0
          </button>
        </div>
        <div className="Math__input">
          <button
            onClick={() => {
              dispatch(setFirstValue(Number(inputValue)));
              dispatch(addition());
              console.log("Input Cleared");
              setInputValue("");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(setFirstValue(Number(inputValue)));
              dispatch(subtraction());
              setInputValue("");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(setFirstValue(Number(inputValue)));
              dispatch(multiplication());
              setInputValue("");
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              dispatch(setFirstValue(Number(inputValue)));
              dispatch(division());
              setInputValue("");
            }}
          >
            /
          </button>
          <button
            className="special_class"
            onClick={() => {
              console.log("ok calculating..");
              dispatch(setSecondValue(Number(inputValue)));
              dispatch(calculateResult());
            }}
          >
            =
          </button>
          <button
            onClick={() => {
              dispatch(clearResult());
              setInputValue("");
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
