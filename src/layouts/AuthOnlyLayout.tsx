import React from "react";
import { Outlet } from "react-router-dom";

const AuthOnlyLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthOnlyLayout;
