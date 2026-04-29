// import React from 'react';

import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../Components/Loading";

const PrivateRouter = ({children}) => {

    const {user,loading}=use(AuthContext)

    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email)
    {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;