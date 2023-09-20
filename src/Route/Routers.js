import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../component/Home/Home.jsx";
import { Signup } from "../component/Signup/Signup.jsx";
import { Login } from "../component/Login/Login.jsx";
import { About } from "../component/About/About.jsx";
import { PrivetRoute } from "./PrivetRoute";

const Routers = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <PrivetRoute>
            <Home />
          </PrivetRoute>
        }
      />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route
        path="/About"
        element={
          <PrivetRoute>
            <About />
          </PrivetRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
