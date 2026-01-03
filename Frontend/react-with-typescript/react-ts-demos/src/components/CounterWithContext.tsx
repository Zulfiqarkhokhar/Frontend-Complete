import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const CounterWithContext = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterWithContext;
