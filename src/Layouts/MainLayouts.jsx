import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MainLayouts() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default MainLayouts;
