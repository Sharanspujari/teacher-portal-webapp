import React from "react";
import { Navigate } from "react-router-dom";

import store from "../store/store";

const PrivateRoute = ({ children }) => {
  return store.getState().auth.isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
