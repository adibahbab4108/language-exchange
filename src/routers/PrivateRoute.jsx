import { useContext, useEffect, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();

    if (loading) { return <Loading />; }

    return user ? children : <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;