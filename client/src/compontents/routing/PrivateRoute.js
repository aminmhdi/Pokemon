import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ redirectPath = "/login", children }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  if (!isAuthenticated && !loading) {
    return (
      <Navigate
        to={redirectPath}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;
