// import React from 'react';

import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center mt-5">Login Your Account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label font-medium text-black">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label font-medium text-black">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-amber-600 text-white font-bold mt-4">Login</button>
            <p className="font-semibold text-center pt-3">Don't have an account ? <Link to='/register'>Register</Link> </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
