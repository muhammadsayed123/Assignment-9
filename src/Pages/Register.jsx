// import React from 'react';

import { Link } from "react-router";

const Register = () => {
    return (
         <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center mt-5">Register Your Account</h2>
        <div className="card-body">
          <fieldset className="fieldset ">
            {/* name */}
            <label className="label font-medium text-black">Name</label>
            <input type="text" className="input" placeholder="Name" />
            {/* Email */}
            <label className="label font-medium text-black">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* photo */}
            <label className="label font-medium text-black">Photo URL</label>
            <input type="URL" className="input" placeholder="Photo URL" />
            {/* password */}
            <label className="label font-medium text-black">Password</label>
            <input type="password" className="input" placeholder="Password" />
            {/*  */}
            <button className="btn bg-amber-600 text-white font-bold mt-4">Register</button>
            <p className="font-semibold text-center pt-3">Already have an account ? <Link to='/login'>Login</Link> </p>
          </fieldset>
        </div>
      </div>
    </div>
    );
};

export default Register;