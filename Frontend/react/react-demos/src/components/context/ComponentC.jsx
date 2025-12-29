import React, { useContext } from "react";
import { Data, Data1 } from "./ContextApi";

const ComponentC = () => {
  const name = useContext(Data);
  const age = useContext(Data1);

  return (
    <div>
      <h1>
        I am {name} and I am {age} years old
      </h1>
    </div>
  );
};

export default ComponentC;
