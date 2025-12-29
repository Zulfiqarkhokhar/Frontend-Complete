import React, { createContext } from "react";
import ComponentA from "./ComponentA";

export const Data = createContext();
export const Data1 = createContext();

const ContextApi = () => {
  const name = "Zulfiqar Ali";
  const age = 27;
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};

export default ContextApi;
