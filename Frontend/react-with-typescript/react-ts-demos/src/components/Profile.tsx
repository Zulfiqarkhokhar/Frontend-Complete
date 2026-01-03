import React from "react";
import UserInfo from "./UserInfo";
import AdminInfo from "./AdminInfo";
import type { Info, AdminInfoList } from "./types";

const Profile = () => {
  const user: Info = {
    id: 1,
    name: "Zulfiqar Ali",
    email: "info@gmail.com",
  };
  const admin: AdminInfoList = {
    id: 2,
    name: "Aqib Ali",
    email: "data@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
};

export default Profile;
