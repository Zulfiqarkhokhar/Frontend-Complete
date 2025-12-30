import React, { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const clear = () => setInputValue("");
  const display = (val) => setInputValue(inputValue + val);
  const calculate = () => {
    try {
      setInputValue(eval(inputValue));
    } catch {
      setInputValue("Error");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <form className="w-80 bg-slate-950/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
        <input
          type="text"
          value={inputValue}
          readOnly
          className="w-full mb-4 p-4 text-right text-3xl
                     bg-slate-800 text-white rounded-xl
                     outline-none"
        />

        <div className="grid grid-cols-4 gap-3 text-xl font-semibold text-white">
          <span
            onClick={clear}
            className="col-span-2 flex justify-center items-center
                       bg-rose-500 rounded-xl py-4 cursor-pointer
                       hover:bg-rose-600 active:scale-95 transition"
          >
            C
          </span>

          <span
            onClick={() => display("/")}
            className="flex justify-center items-center
                       bg-indigo-500 rounded-xl py-4 cursor-pointer
                       hover:bg-indigo-600 active:scale-95 transition"
          >
            ÷
          </span>

          <span
            onClick={() => display("*")}
            className="flex justify-center items-center
                       bg-indigo-500 rounded-xl py-4 cursor-pointer
                       hover:bg-indigo-600 active:scale-95 transition"
          >
            ×
          </span>

          {["7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "%"].map(
            (val) => (
              <span
                key={val}
                onClick={() => display(val)}
                className="flex justify-center items-center
                         bg-slate-700 rounded-xl py-4 cursor-pointer
                         hover:bg-slate-600 active:scale-95 transition"
              >
                {val}
              </span>
            )
          )}

          <span
            onClick={() => display("0")}
            className="col-span-2 flex justify-center items-center
                       bg-slate-700 rounded-xl py-4 cursor-pointer
                       hover:bg-slate-600 active:scale-95 transition"
          >
            0
          </span>

          <span
            onClick={() => display(".")}
            className="flex justify-center items-center
                       bg-slate-700 rounded-xl py-4 cursor-pointer
                       hover:bg-slate-600 active:scale-95 transition"
          >
            .
          </span>

          <span
            onClick={calculate}
            className="flex justify-center items-center
                       bg-emerald-500 rounded-xl py-4 cursor-pointer
                       hover:bg-emerald-600 active:scale-95 transition"
          >
            =
          </span>
        </div>
      </form>
    </section>
  );
};

export default Calculator;
