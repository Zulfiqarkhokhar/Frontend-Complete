import React from "react";
import type { Info } from "./types";

type UserInfoProp = {
  user: Info;
};

const UserInfo = ({ user }: UserInfoProp) => {
  return (
    <div>
      <h1>UserInfo</h1>
      <h3>Id: {user.id}</h3>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
};

export default UserInfo;
