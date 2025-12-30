import React, { useState } from "react";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
  };

  return (
    <div
      style={{ backgroundColor, color: textColor }}
      className="min-h-screen flex flex-col items-center justify-center transition-colors duration-300"
    >
      {/* Button */}
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
        className="mb-10 px-8 py-3 rounded-full text-lg font-semibold
                   hover:scale-105 transition-transform duration-200"
      >
        {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>

      {/* Content Section */}
      <section className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Welcome to A <br />
          <span>Real world...</span>
        </h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
