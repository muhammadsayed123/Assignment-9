// import React from 'react';

import  { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser,setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, email, photo, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user)
      })
      .catch((err) => {
        // const errorCode = err.code;
        const errorMessage = err.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center mt-5">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset ">
            {/* name */}
            <label className="label font-medium text-black">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {/* Email */}
            <label className="label font-medium text-black">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* photo */}
            <label className="label font-medium text-black">Photo URL</label>
            <input
              name="photo"
              type="URL"
              className="input"
              placeholder="Photo URL"
              required
            />
            {/* password */}
            <label className="label font-medium text-black">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            {/*  */}
            <button
              type="submit"
              className="btn bg-amber-600 text-white font-bold mt-4"
            >
              Register
            </button>
            <p className="font-semibold text-center pt-3">
              Already have an account ? <Link to="/login">Login</Link>{" "}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
