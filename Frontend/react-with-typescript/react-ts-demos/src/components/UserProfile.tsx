import React, { useState } from "react";

interface UserProfileShape {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<UserProfileShape>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setUser((prevUser) => ({ ...prevUser, name }));
  };

  const updateAge = (age: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      age: +age,
    }));
  };

  const updateEmail = (email: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      email,
    }));
  };

  return (
    <div>
      <h1>UserProfile</h1>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={user.age > 0 ? user.age : ""}
        onChange={(e) => updateAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => updateEmail(e.target.value)}
      />

      <h2>User Profile Summary</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
