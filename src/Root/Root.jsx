// import React from 'react';

import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <div>
      <div className="border-b-3 text-yellow-500">
        <Navbar></Navbar>
      </div>
      <div className="main">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
