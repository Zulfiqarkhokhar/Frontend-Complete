import React, { useState, useRef, useEffect } from "react";

const Accordian = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (isActive) {
      setMaxHeight(contentRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isActive]);

  return (
    <section className="w-full max-w-2xl mx-auto my-3 border-b border-gray-700">
      <div
        onClick={() => setIsActive(!isActive)}
        className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-lg
                   hover:bg-slate-700 transition-colors duration-200"
      >
        <div className="text-white font-semibold text-lg">{title}</div>
        <p className="text-white text-2xl">{isActive ? "-" : "+"}</p>
      </div>

      <div
        ref={contentRef}
        style={{ maxHeight: `${maxHeight}px` }}
        className="overflow-hidden transition-all duration-300"
      >
        <p className="p-4 bg-slate-900 text-gray-300 text-md">{content}</p>
      </div>
    </section>
  );
};

export default Accordian;
