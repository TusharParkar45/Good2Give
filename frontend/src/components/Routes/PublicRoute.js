import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ Children }) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return Children;
  }
};

export default PublicRoute;
