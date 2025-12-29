import React from "react";
import MyProfile from "./MyProfile";
import { UserProvider } from "./UserContext";
import UpdateProfile from "./UpdateProfile";

const MyApp = () => {
  return (
    <UserProvider>
      <MyProfile />
      <UpdateProfile />
    </UserProvider>
  );
};

export default MyApp;
