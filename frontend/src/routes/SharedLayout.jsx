import React, { useEffect, useState } from "react";
import { CircularLoader, Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  const [loadingData, setLoadingData] = useState(false);
  useEffect(() => {
    setLoadingData(true);
    const id = setTimeout(() => {
      setLoadingData(false);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);
  if(loadingData) {
    return ( <CircularLoader/>)
  }
  return (
    <>
      <Navbar />
      <Outlet />
      <p className="hr bg-slate-200"></p>
      <Footer />
    </>
  );
};

export default SharedLayout;
