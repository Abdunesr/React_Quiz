import { useReducer, useState } from "react";

const initialState = { count: 0, step: 0 };

function reducer(state, action) {
  /*  if (action.type === "dec") return state - 1;
  if (action.type === "inc") return state + 1;
  if (action.type === "setcount") return action.payload; */
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - Number(state.step) };
    case "inc":
      return { ...state, count: state.count + Number(state.step) };
    case "setcount":
      return { ...state, count: action.count.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;

    default:
      throw new Error("unknown action is dispatched");
  }
}

function DateCounter() {
  /* const [count, setCount] = useState(0); */
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
    // setCount((count) => count - 1);
    /*  setCount((count) => count - step); */
  };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    /* setCount((count) => count + step); */
  };

  const defineCount = function (e) {
    /*     setCount(Number(e.target.value)); */
    dispatch({ type: "setcount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: e.target.value });
    /*    setStep(Number(e.target.value)); */
  };

  const reset = function () {
    /*    setCount(0); */
    /*  setStep(1); */
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
