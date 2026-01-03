import type { ReactNode } from "react";

interface UserShape {
  children: ReactNode;
}

const UserWithChildren = ({ children }: UserShape) => {
  return (
    <div>
      <h1>UserWithChildren</h1>
      <div>{children}</div>
    </div>
  );
};

export default UserWithChildren;
