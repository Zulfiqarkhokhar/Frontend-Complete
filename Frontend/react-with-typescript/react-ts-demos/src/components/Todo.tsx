import React, { useState } from "react";

interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const newTodo = {
      id: todos.length + 1,
      task,
      isCompleted: false,
    };
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <button onClick={() => addTodo("New Todo")}>Add New Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}-{todo.isCompleted ? "(Completed)" : "(Pending)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
