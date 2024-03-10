import Navbar from "@/components/layout-components/navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      
    </>
  );
};

export default MainLayout;
