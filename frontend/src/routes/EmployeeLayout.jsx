import React from "react";
import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const EmployeeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <p className="hr bg-slate-200"></p>
      <Footer />
    </>
  );
};

export default EmployeeLayout;
