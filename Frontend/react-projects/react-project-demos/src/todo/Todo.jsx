import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;

    setTodos((todos) => [
      ...todos,
      {
        id: Date.now(),
        title: input,
      },
    ]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <section className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="w-full max-w-md bg-slate-950/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          📝 Todo List
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Type your todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-slate-800 text-white
                       placeholder-gray-400 outline-none focus:ring-2
                       focus:ring-emerald-500"
          />

          <button
            onClick={handleSubmit}
            className="px-5 py-3 rounded-xl bg-emerald-500 text-white
                       font-semibold hover:bg-emerald-600 active:scale-95
                       transition-all duration-200 shadow-md"
          >
            Add
          </button>
        </div>
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="bg-slate-800 text-white px-4 py-3 rounded-xl
                         shadow flex items-center justify-between"
            >
              <span className="text-lg">{todo.title}</span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="w-9 h-9 flex items-center justify-center rounded-full
             bg-rose-500/90 text-white font-bold
             hover:bg-rose-600 active:scale-95
             transition-all duration-200 shadow-md"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
        {todos.length === 0 && (
          <p className="text-gray-400 text-center mt-6">
            No todos yet. Add one 👆
          </p>
        )}
      </div>
    </section>
  );
};

export default Todo;
