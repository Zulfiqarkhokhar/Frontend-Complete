import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>UseState</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <Bucket />
      <MovieHub />
      <ComponentOne count={count} handleClick={() => setCount(count + 1)} />
      <ComponentTwo count={count} handleClick={() => setCount(count + 1)} />
      <ComponentThree />
    </div>
  );
};

const Bucket = () => {
  const [fruits, setFruits] = useState(["apple", "banana"]);

  function addFruit() {
    setFruits([...fruits, "orange"]);
  }
  function removeFruit() {
    setFruits(fruits.filter((f) => f !== "apple"));
  }
  function updateFruit() {
    setFruits(fruits.map((f) => (f === "banana" ? "banana shake" : f)));
  }

  return (
    <div>
      <ul>
        {fruits.map((f) => (
          <li>{f}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Fruit</button>
      <button onClick={removeFruit}>Remove Fruit</button>
      <button onClick={updateFruit}>Update Fruit</button>
    </div>
  );
};

const MovieHub = () => {
  const [movie, setMovie] = useState({
    title: "Saw",
    rating: 8,
  });

  const handleRating = () => setMovie({ ...movie, rating: 9.5 });

  return (
    <div>
      <h1>Title: {movie.title}</h1>
      <h2>Rating: {movie.rating}</h2>

      <button onClick={handleRating}>Change Rating</button>
    </div>
  );
};

const ComponentOne = ({ count, handleClick }) => {
  function handleIncrement() {
    handleClick();
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};
const ComponentTwo = ({ count, handleClick }) => {
  function handleIncrement() {
    handleClick();
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};

const ComponentThree = () => {
  const [randomNUmber, setRandomNumber] = useState(() => {
    let random = Math.floor(Math.random() * 100);
    return random;
  });

  function handleClick() {
    let random = Math.floor(Math.random() * 100);
    setRandomNumber(random);
  }
  return (
    <div>
      <h2>{randomNUmber}</h2>
      <button onClick={handleClick}>change new Number</button>
    </div>
  );
};

export default UseStateHook;
