import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const MyProfile = () => {
  const { user } = useContext(UserContext);

  return <h1>Name: {user.name}</h1>;
};

export default MyProfile;
