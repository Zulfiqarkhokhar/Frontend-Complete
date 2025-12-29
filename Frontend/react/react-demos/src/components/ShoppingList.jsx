import React, { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };

    setItems((previous) => [...previous, newItem]);

    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>ShoppingList</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Item Name"
          value={name}
          placeholder="add item"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="Quantity"
          value={quantity}
          placeholder="add quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">add item</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}-Quantity:{item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
