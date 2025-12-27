import React from "react";

const Props = ({ children }) => {
  return (
    <div>
      <User
        name="Zulfiqar Ali"
        age={28}
        profession="Software Engineer"
        hobbies={["Coding", "Reading", "Sleeping"]}
      />
      <div>{children}</div>
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Profession: {props.profession}</h3>
      <h3>
        Hobbies:{" "}
        {props.hobbies.map((hobby) => (
          <ul>
            <li>{hobby}</li>
          </ul>
        ))}
      </h3>
    </div>
  );
};

export default Props;
