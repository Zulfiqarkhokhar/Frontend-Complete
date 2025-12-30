import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((previous) => previous + 1);
  const handleDecrement = () => setCount((previous) => previous - 1);

  return (
    <section className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="bg-slate-950/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-8xl font-extrabold text-white mb-8">{count}</h1>

        <div className="flex gap-6 justify-center">
          <button
            onClick={handleIncrement}
            className="w-16 h-16 flex items-center justify-center rounded-full 
                       bg-emerald-500 text-white text-4xl font-bold
                       hover:bg-emerald-600 active:scale-95 transition-all duration-200 shadow-lg"
          >
            +
          </button>

          <button
            onClick={handleDecrement}
            className="w-16 h-16 flex items-center justify-center rounded-full 
                       bg-rose-500 text-white text-4xl font-bold
                       hover:bg-rose-600 active:scale-95 transition-all duration-200 shadow-lg"
          >
            −
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
