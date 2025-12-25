import React from "react";

const ExpressionInJSX = () => {
  const myName = "Zulfiqar ALi";

  const multiply = (a, b) => a * b;

  const specialClass = "enum-val";

  return (
    <div>
      {/* consider as simple text */}
      <h1>2+2</h1>
      {/* consider as javascrip code and sum it */}
      <h1>{2 + 2}</h1>
      <h1>2 + 2 = {2 + 2}</h1>
      <h2>{myName}</h2>
      <h2>My favorite colors are {["Black", "Brown"]}</h2>
      <h2>2 * 3 = {multiply(2, 3)}</h2>
      <div className={specialClass}></div>
    </div>
  );
};

export default ExpressionInJSX;
