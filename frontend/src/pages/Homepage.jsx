import React, { useState, useEffect } from "react";
import { EmployeeHome } from "../shared";
import Home from "./Home";

const Homepage = () => {
  const [role, setRole] = useState(sessionStorage.getItem("role"));

  useEffect(() => {
    const handleStorageChange = () => {
      setRole(sessionStorage.getItem("role"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return <>{role?.toLowerCase() === "employee" ? <Home /> : <Home />}</>;
};

export default Homepage;
