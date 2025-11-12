import React, { use, useContext } from "react";
import { AuthContext } from "../context/AuthContex";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <span className="loading loading-infinity loading-xl "></span>
        <p className="text-gray-700 text-lg font-medium">Loading...</p>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/loginPage"></Navigate>;
  }

  return children;
}

export default PrivateRoute;
