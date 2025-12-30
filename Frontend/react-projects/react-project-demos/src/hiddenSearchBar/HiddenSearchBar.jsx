import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowInput(false);
        setBgColor("white");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = () => {
    setBgColor("#1a1a1a");
    setShowInput(true);
  };

  return (
    <section
      ref={containerRef}
      className={`flex items-center justify-center h-16 w-80 mx-auto mt-20
                 rounded-full shadow-md transition-colors duration-300 cursor-pointer
                 ${bgColor === "#1a1a1a" ? "bg-[#1a1a1a]" : "bg-white"}`}
      onClick={handleClick}
    >
      {showInput ? (
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-full outline-none
                     text-white placeholder-gray-400"
          autoFocus
        />
      ) : (
        <FaSearch className="text-gray-600 text-xl hover:text-gray-800 transition-colors duration-200" />
      )}
    </section>
  );
};

export default HiddenSearchBar;
