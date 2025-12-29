import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
    document.title = `Increment ${value}`;
  }, []); // whithout dependecy array it will be called each time component render/re-render
  // with [] empty array only called on initial render
  // with [value] state value only renders when that specific value updates

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}> increment</button>
    </div>
  );
};

export default UseEffectHook;
