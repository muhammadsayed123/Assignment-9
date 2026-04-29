// import React from 'react';

import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const [error, setError] = useState();
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    } else {
      setError("");
    }

    // console.log(name, email, photo, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
            toast.success("Register successfully");
          })
          .catch((error) => {
            // console.log(error);
            setUser(user);
          });
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage);
      });
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success(result);
      })
      .catch((error) => {
        toast.success(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 pb-5 shadow-2xl ">
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
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
                required
              />
              <button
                onClick={handleTogglePassword}
                className="btn btn-xs absolute top-2.5 right-5"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </div>
            {/*  */}
            <button
              type="submit"
              className="btn bg-amber-600 text-white font-bold mt-4"
            >
              Register
            </button>
            <p className="font-semibold text-center pt-3">
              Already have an account ?{" "}
              <Link to="/login" className="text-red-600">
                Login
              </Link>{" "}
            </p>
            {error && <p className="font-bold text-red-600">{error}</p>}
          </fieldset>
        </form>
        <button
          onClick={handleGoogleSignIn}
          type="submit"
          className="btn bg-white border hover:bg-amber-500 hover:text-white w-85 flex ml-5 items-center "
        >
          <FcGoogle />
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
