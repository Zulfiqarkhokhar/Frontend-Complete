import React from "react";
import { initialState, CounterReducer } from "./counterReducer";
import { useReducer, useState } from "react";

const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  const [value, setValue] = useState(0);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: +value });
    setValue(0);
  };

  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: +value });
    setValue(0);
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <input
        type="number"
        name="amout"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Amount"
      />
      <button onClick={handleIncrementByAmount}>Add</button>
      <button onClick={handleDecrementByAmount}>Subtract</button>
    </div>
  );
};

export default Counter;
