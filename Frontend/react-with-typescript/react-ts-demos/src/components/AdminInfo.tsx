import React from "react";
import type { AdminInfoList } from "./types";

type AdminInfoProp = {
  admin: AdminInfoList;
};

const AdminInfo = ({ admin }: AdminInfoProp) => {
  return (
    <div>
      <h1>AdminInfo</h1>
      <h3>Id: {admin.id}</h3>
      <h3>Name: {admin.name}</h3>
      <h3>Email: {admin.email}</h3>
      <h3>Role: {admin.role}</h3>
      <h3>Last LoggedIn: {admin.lastLogin.toLocaleString()}</h3>
    </div>
  );
};

export default AdminInfo;
