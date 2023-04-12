import React from "react";
import Navbar from "../Pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const Layout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
