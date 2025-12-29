import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
