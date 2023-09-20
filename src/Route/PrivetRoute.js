import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const PrivetRoute = ({ children }) => {
  const { user } = UserAuth();

  console.log(user);

  if (!user) {
    return <Navigate to="/Signup" />;
  }
  return children;
};
