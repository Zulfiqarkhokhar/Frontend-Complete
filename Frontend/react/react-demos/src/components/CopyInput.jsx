import React, { useState } from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
  const [inputValue, setValue] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      <PopupContent copied={copied} />
    </div>
  );
};

export default CopyInput;
