import React, { useRef } from "react";

const UseRefComponent = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Zulfiqar";
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus and Write Name</button>
    </div>
  );
};

export default UseRefComponent;
