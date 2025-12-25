import React, { use } from "react";

const List = () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const userInfo = [
    {
      name: "Zulfiqar",
      email: "zulfiqar@gmail.com",
      location: "Naudero",
    },
    {
      name: "Yasir",
      email: "yasir@gmail.com",
      location: "Khairpur",
    },
    {
      name: "Aamir",
      email: "aamir@gmail.com",
      location: "Gambat",
    },
  ];

  return (
    <div>
      <h1>List and key</h1>
      {numbers.map((number) => {
        return (
          <ul key={number}>
            <li>{number}</li>
          </ul>
        );
      })}

      {userInfo.map((user) => (
        <ul>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Location: {user.location}</li>
        </ul>
      ))}
    </div>
  );
};

export default List;
