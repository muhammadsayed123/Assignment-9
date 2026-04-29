// import React from 'react';

import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState();
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [showPassword,setShowPassword]=useState(false)

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

    console.log(name, email, photo, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((err) => {
        // const errorCode = err.code;
        const errorMessage = err.message;
        alert(errorMessage);
      });
  };

  const handleTogglePassword=(e)=>{
    e.preventDefault();
    setShowPassword(!showPassword)
  }
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
            <div className="relative">
              <input
              name="password"
              type={showPassword ? "text":"password"}
              className="input"
              placeholder="Password"
              required
            />
            <button onClick={handleTogglePassword} className="btn btn-xs absolute top-2.5 right-5">
              {
                showPassword ? <FaEyeSlash></FaEyeSlash>: <FaEye></FaEye>
              }
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
              Already have an account ? <Link to="/login">Login</Link>{" "}
            </p>
            {error && <p className="font-bold text-red-600">{error}</p>}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
