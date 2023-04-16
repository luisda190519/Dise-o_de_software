import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          Component
        ) : (
          <Navigate to="/loginUser" replace />
        )
      }
    />
  );
};

export default PrivateRoute;
