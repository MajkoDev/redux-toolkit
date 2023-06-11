import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice.js";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [incrementValue, setIncrementValue] = useState(2);
  const [decrementValue, setDecrementValue] = useState(3);

  return (
    <div
      style={{
        margin: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Counter</h2>

      <h1>{count}</h1>

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div className="container">
        <input
          type="number"
          value={incrementValue}
          onChange={(e) => setIncrementValue(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementByAmount(parseInt(incrementValue)))}
        >
          Increment by Amount
        </button>
      </div>

      <div className="container">
        <input
          type="number"
          value={decrementValue}
          onChange={(e) => setDecrementValue(e.target.value)}
          style={{ padding: "2px", margin: "12px" }}
        />
        <button
          onClick={() => dispatch(decrementByAmount(parseInt(decrementValue)))}
        >
          Decrement by Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
