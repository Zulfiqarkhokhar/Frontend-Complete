import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter your todo"
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo, index) => (
        <ul key={index}>
          <li>{todo}</li>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
