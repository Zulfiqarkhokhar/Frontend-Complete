import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            placeholder="input name"
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Age:{" "}
          <input
            type="number"
            name="age"
            value={profile.age}
            placeholder="input age"
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <h3>Profile</h3>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
      </div>
    </div>
  );
};

export default Profile;
