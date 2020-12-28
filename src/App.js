import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearResult,
  calculateResult,
  square,
  abs,
  sin,
  cos,
  tan,
  setInputs,
} from "./actions";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const result = useSelector((state) => state.basicCalculationReducer.result);

  const dispatch = useDispatch();

  const inputFieldRef = useRef(null);

  // const inputs = useSelector((state) => state.basicCalculationReducer.inputs);

  useEffect(() => {
    setInputValue(`${result}`);
  }, [result]);

  return (
    <div
      className="bg-gray-50 p-8 m-auto shadow-lg rounded-md mt-32"
      style={{ width: "600px", height: "50vh" }}
    >
      <h2 className="font-bold text-gray-400 text-4xl pb-2 text-center">
        Calculator
      </h2>
      <input
        className="p-4 text-red-800 font-bold outline-none w-full shadow-lg rounded-md select-none"
        ref={inputFieldRef}
        type="text"
        style={{ textAlign: "right" }}
        readOnly
        value={inputValue !== "" ? inputValue : result}
      />
      <div className="keypad">
        <div className="my-3">
          <button
            className="p-3 bg-blue-100 rounded-md hover:bg-blue-400 text-xl font-bold focus:outline-none"
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            1
          </button>
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            2
          </button>
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            3
          </button>
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            4
          </button>
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            5
          </button>
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            6
          </button>
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            7
          </button>
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            8
          </button>
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            9
          </button>
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
            onMouseDown={(e) =>
              setInputValue(`${inputValue}${e.target.innerText}`)
            }
          >
            0
          </button>
        </div>
        <div className="Math__input">
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
            onClick={() => {
              dispatch(setInputs(Number(inputValue), "+"));
              setInputValue("");
            }}
          >
            +
          </button>
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
            onClick={() => {
              dispatch(setInputs(Number(inputValue), "-"));
              setInputValue("");
            }}
          >
            -
          </button>
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
            onClick={() => {
              dispatch(setInputs(Number(inputValue), "*"));
              setInputValue("");
            }}
          >
            *
          </button>
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
            onClick={() => {
              dispatch(setInputs(Number(inputValue), "/"));
              setInputValue("");
            }}
          >
            /
          </button>
          <button
            className="px-8 py-3 bg-pink-400 rounded-md hover:bg-blue-400 text-xl font-bold focus:outline-none"
            onClick={() => {
              console.log("ok calculating..");
              dispatch(setInputs(Number(inputValue), "="));
              setInputValue("");
              dispatch(calculateResult());
            }}
          >
            =
          </button>

          <button
            onClick={() => dispatch(square(Number(inputValue)))}
            className="p-3 bg-blue-100 rounded-md hover:bg-blue-400 m-2 text-xl font-bold focus:outline-none"
          >
            sqr()
          </button>

          <button
            onClick={() => dispatch(abs(Number(inputValue)))}
            className="p-3 bg-blue-100 rounded-md hover:bg-blue-400 m-2 text-xl font-bold focus:outline-none"
          >
            abs()
          </button>
          <button
            onClick={() => dispatch(sin(Number(inputValue)))}
            className="p-3 bg-blue-100 rounded-md hover:bg-blue-400 m-2 text-xl font-bold focus:outline-none"
          >
            sin()
          </button>
          <button
            onClick={() => dispatch(cos(Number(inputValue)))}
            className="p-3 bg-blue-100 rounded-md hover:bg-blue-400 m-2 text-xl font-bold focus:outline-none"
          >
            cos()
          </button>
          <button
            onClick={() => dispatch(tan(Number(inputValue)))}
            className="p-3 bg-blue-100 rounded-md hover:bg-blue-400 m-2 text-xl font-bold focus:outline-none"
          >
            tan()
          </button>
          <button
            className="p-3 bg-blue-100 hover:bg-blue-400 rounded-md m-2 font-bold text-xl focus:outline-none"
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
