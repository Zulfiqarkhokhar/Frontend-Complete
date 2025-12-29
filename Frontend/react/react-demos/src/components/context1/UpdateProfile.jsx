import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

const UpdateProfile = () => {
  const [newName, setNewName] = useState("");
  const { updateUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(newName);
    setNewName("");
  };

  return (
    <div>
      <h2>UpdateProfile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          placeholder="Enter New Name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Update Name</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
