// import React from 'react';

import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location)
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success("Login successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errormessage = error.message;
        toast.error(errormessage);
      });
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
    <div className="hero bg-base-200 min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-5">
        <h2 className="font-bold text-2xl text-center mt-5">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label font-medium text-black">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn bg-amber-600 text-white font-bold mt-4"
            >
              Login
            </button>

            <p className="font-semibold text-center pt-3">
              Don't have an account ?{" "}
              <Link to="/register" className="text-red-600">
                Register
              </Link>{" "}
            </p>
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

export default Login;
