import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { UserAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const SignOut = async () => {
    try {
      await logout();
      navigate("/Signup");
      alert("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <h1 className="text-xl text-center font-bold text-white bg-slate-400">
        auth and firestore
      </h1>
      <ul className="flex justify-center items-center space-between bg-red-200">
        <li className="m-4">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="m-4">
          <NavLink to="/About">About</NavLink>
        </li>
        <li className="m-4">
          <NavLink to="/Signup">Signup</NavLink>
        </li>
        <li className="m-4">
          <NavLink to="/login">login</NavLink>
        </li>

        {user ? (
          <>
            <li
              className="m-4 cursor-pointer bg-red-500   px-6 py-1 my-4  text-white"
              onClick={SignOut}
            >
              Logout
            </li>
            <span className="w-3 h-3 bg-green-500 rounded-full ml-6" />
          </>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default Header;
