// import React from 'react';

import { Link, NavLink } from "react-router";
import img from "../../public/favicon.svg";
import userImg from '../Pic/userImg.png'
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    console.log("logout btn");

    logOut()
      .then(() => {
        // alert("Logout");
        toast.success("Logout Successfully");
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div className=" md:w-9/12 sm:w-11/12 mx-auto mt-3 mb-3">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={img} alt="" className="w-7 h-7" />
          <h1 className="font-bold text-3xl text-amber-600 ">
            Toy <span className="text-indigo-500">Topia</span>
          </h1>
          {/* <div>{user && user.email}</div> */}
        </Link>

        <div className="flex gap-1">
          <NavLink to="/" className="btn bg-yellow-500 rounded-xl">
            Home
          </NavLink>
          <img
            src={`${user ? user.photoURL : userImg}`}
            alt=""
            className="w-10 rounded-full"
          />
        </div>

        <div className="flex gap-5">
          {user ? (
            <NavLink
              onClick={handleLogout}
              to="/login"
              className="btn bg-red-500 rounded-xl text-amber-50"
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="btn bg-orange-500 rounded-xl text-amber-50"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
