import React from "react";
import { Navigate } from "react-router-dom";
import store from "../store/store";

const PrivateRoute = ({ children }) => {
  // here checking that is user logged in or not 
  let checkisLogin = store.getState().auth.isLoggedIn;
  return checkisLogin ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
