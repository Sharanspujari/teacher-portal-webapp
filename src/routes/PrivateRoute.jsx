import React from "react";
import { Navigate } from "react-router-dom";

import store from "../store/store";

const PrivateRoute = ({ children }) => {
  let checkisLogin = store.getState().auth.isLoggedIn;
  return checkisLogin ? <>{children}</> : <Navigate to="/" replace />;
};

export default PrivateRoute;
