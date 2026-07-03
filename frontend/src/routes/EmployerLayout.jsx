import React from "react";
import { EmployerHeader, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const EmployerLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default EmployerLayout;
